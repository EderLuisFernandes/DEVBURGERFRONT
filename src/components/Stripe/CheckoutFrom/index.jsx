import{ useState } from "react";
import { useLocation } from "react-router-dom";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import '../styles.css'
import { useCart } from "../../../hooks/CartContext";
import { Api } from "../../../services/Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export  function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const {state: {dpmCheckerLink}} = useLocation();
  const {clearCart,cartProducts} = useCart()
  const navigate = useNavigate()

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.log('Stripe ou Elements com falaha, tent novamente')
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect:'if_required',
    });

    console.log(paymentIntent)
    console.log(error)
    if (error) {
      setMessage(error.message);
      toast.error(error.message)
    } else if(paymentIntent && paymentIntent.status === 'succeeded') {
       try {
        const products = cartProducts.map(product =>{
            return {
               id:product.id,
               quantity: product.quantity, 
               price: product.price
              };
        });
                const {status} = await Api.post('/orders', {products},
            {
              validateStatus: () => true,
            }
          );
            if(status === 200 || status === 201){
              setTimeout(() => {
                navigate(`/Complete?payment_intent_client_secret=${paymentIntent.client_secret}`)  
              }, 5000);
              clearCart()
              toast.success('Pedido Realizado com Sucesso! ');
            }
            else if(status === 400){
              toast.error('Falha ao realizar o seu pedido')
            }
            else{
              throw new Error();
            }
      
          }catch(error) {
            toast.error('Falha no Sistema! Tente novamente')
            };
            clearCart()

    }else{
        navigate(`/Complete?payment_intent_client_secret=${paymentIntent.client_secret}`)
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs"
  }

  return (
    <div className="container">
      <form id="payment-form" onSubmit={handleSubmit}>

        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={isLoading || !stripe || !elements} id="submit" className="button">
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar Agora"}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
      {/* [DEV]: Display dynamic payment methods annotation and integration checker */}
      <div id="dpm-annotation">
        <p>
          Os metodos de pagamaneto são disponibilizado de acordo com a sua região.&nbsp;
          <a href={dpmCheckerLink} target="_blank" rel="noopener noreferrer" id="dpm-integration-checker">Ver metodos de Pagamanetos</a>
        </p>
      </div>
    </div>
  );
}