import {useEffect, useState } from "react"
import { Api } from "../../services/Api"
import Carousel from "react-multi-carousel";
import { Container,Title,ContainerItens,CategoryButoon } from "./style";
import { useNavigate } from "react-router-dom";


 export function CategoriesCarrousel(){
    const [categories, setCategorie] = useState([])

        useEffect(()=>{
            async function loadCategorie() {
                const {data} = await Api.get('/categories')

                setCategorie(data)
                console.log(data)
            }
            loadCategorie();
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

        const navigate = useNavigate();
    return <>
      <Container>
        <Title>Categorias</Title>
        <Carousel responsive={responsive} infinite={true}
        partialVisbile={false}
        itemClass="carrousel-item"
        >
          {categories.map(category =>(
            <ContainerItens key={categories.id} imageUrl={category.url} >
              <CategoryButoon
               onClick={()=>{
                navigate({
                  pathname:'/Cardapio',
                  search: `?categoria=${category.id}`,
                }
              )
               }}
              >{category.name}</CategoryButoon>
             
            </ContainerItens>
          ))}
          
        </Carousel>
      </Container>
    </>
}