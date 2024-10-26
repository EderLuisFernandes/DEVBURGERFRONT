import { Banner,Container } from "./styles"
import { CategoriesCarrousel ,OfferCarrousel } from "../../components";



export function Home(){
    return <>
     <main>
        <Banner>
            <h1>Seja Bem-Vindo(a)!</h1>
            </Banner>
            <Container>
                <div>
                    <CategoriesCarrousel/>        
                    <OfferCarrousel/>
                     </div> 
                    
            </Container>

     </main>
    </>
}