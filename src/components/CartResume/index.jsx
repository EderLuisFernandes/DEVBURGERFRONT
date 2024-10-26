import { Button } from "../Button";
import {Container} from './styles'
import { toast } from "react-toastify";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../../hooks/CartContext";
import { Api } from "../../services/Api";
import {formatPrice} from '../../utils/formatPrice'


export function CartResume(){

    const navigate = useNavigate()
    const [finalprice, setFinalPrice] = useState(0)
    const [deliveyTax]= useState(500)
    const {clearCart,cartProducts} = useCart()

    useEffect(()=>{
        const sumAllItems = cartProducts.reduce((acc, current)=>{
            return current.price * current.quantity + acc
        },0)
        setFinalPrice(sumAllItems)
    },[cartProducts])

    const submitOrder = async () =>{
        const products = cartProducts.map(product =>{
            return {
               id:product.id,
               quantity: product.quantity, 
               price: product.price
              };
        });
        try{
            const {data} = await Api.post('/create-payment-intent',{products})
            
            navigate('/Checkout',{
            state: data
             })
        }catch(err){

          toast.error('Erro tente Novamente', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }

    
    }



    return<div>
    <Container>
    <div className="container-top">

        <h2 className="title">Resumo do Pedido</h2>

        <p className="items">items</p>

        <p className="items-price">{formatPrice(finalprice)}</p>

        <p className="delivery-tax">Taxa de Entrega</p>

        <p className="delivery-tax-price">{formatPrice(deliveyTax)}</p>
    </div>
    <div className="container-bottom">
    <p>Total</p>
    <p>{formatPrice(finalprice + deliveyTax)}</p>
    </div>
    </Container> 
    <Button onClick={submitOrder} >Finalizar pedido</Button>      

    </div>
}