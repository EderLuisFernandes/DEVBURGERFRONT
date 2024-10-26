import {useEffect, useState } from "react"
import { Api } from "../../services/Api"
import Carousel from "react-multi-carousel";
import { Container,Title } from "./style";
import { CardProduct } from "../CardProduct";
import { formatPrice } from "../../utils/formatPrice";


 export function OfferCarrousel(){
    const [offers, setoffers] = useState([])

        useEffect(()=>{
            async function loadProducts() {
                const {data} = await Api.get('/products')

                const onlyOffers =data.filter(product => product.offer).map(product =>({
                  currencyValue: formatPrice(product.price), ...product,
                }));

              setoffers(onlyOffers)
            }
            loadProducts();
        },[]);
 

        const responsive = {
          superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
          },
          desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4
          },
          tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 3
          },
          mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 2
          }
        };
    return <>
      <Container>
        <Title>Ofertas do Dia</Title>
        <Carousel responsive={responsive} infinite={true}
        partialVisbile={false}
        itemClass="carrousel-item"
        >
          {offers.map(product =>(
            <CardProduct key={product .id} product={product}  >
              
            </CardProduct>
          ))}
          
        </Carousel>
      </Container>
    </>
}