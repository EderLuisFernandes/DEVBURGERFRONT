import { useContext,useState,useEffect, createContext} from "react";

const CartContext = createContext({})

export const CartProvider = ({children})=>{
    const [cartProducts, setCartProducts] = useState([])

    const putProductInCart = (product) => {
        const cartIndex = cartProducts.findIndex( prd => prd.id === product.id)
        let newProductInCart;
        if(cartIndex >= 0 ){
            newProductInCart = cartProducts.map((prd, index) => index === cartIndex ?{...prd,quantity:prd.quantity + 1}: prd)
            // newProductInCart[cartIndex].quantity += 1
            // setCartProducts(newProductInCart)
        }else{
            product.quantity = 1
            newProductInCart =[...cartProducts, {...product , quantity: 1}]
           

        }
         setCartProducts(newProductInCart)
        updateLocalStorage(newProductInCart)
    };

    const clearCart = () =>{
            setCartProducts([])
            updateLocalStorage([])
    }

    const deleteProduct= (productId) =>{
        const newCart = cartProducts.filter(prd =>prd.id !== productId)
        setCartProducts(newCart)

        updateLocalStorage(newCart)
        
    }

    const increaseProduct = (productId) =>{

        const newCart = cartProducts.map(prd => {
            return prd.id === productId ? {...prd, quantity: prd.quantity + 1}: prd
        } )

        setCartProducts(newCart)
        updateLocalStorage(newCart)
    }

    const decreaseProduct = (productId)=>{
        const cartIndex = cartProducts.findIndex( prd => prd.id === productId)
        if(cartProducts[cartIndex].quantity > 1){
            const newCart = cartProducts.map(prd => {
                return prd.id === productId ? {...prd, quantity: prd.quantity - 1}: prd
            } );
            setCartProducts(newCart)
            updateLocalStorage(newCart)
        }else{
            deleteProduct(productId)
        }      
    }  
      const updateLocalStorage = (products) =>{
        localStorage.setItem('devburger:cartInfo', JSON.stringify(products))
    }

    useEffect(()=>{
         const clieteCartData = localStorage.getItem('devburger:cartInfo')

         if(clieteCartData){
            setCartProducts(JSON.parse(clieteCartData))
         }
    },[])
    return <>
    <CartContext.Provider value={{
        cartProducts,
        putProductInCart,
        clearCart,deleteProduct,
        increaseProduct,
        decreaseProduct}} >
            {children}</CartContext.Provider>
    
    </>
};

export const useCart = () =>{
    const cartContexto = useContext(CartContext)

    if(!cartContexto){
        throw new Error('o Cart tem que se com um contexto')   
 }
  return cartContexto
};