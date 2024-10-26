import Logo from '../../assets/Logo1.svg'
import { Content,Banner,Container,Title } from './styles'
import { CartItems, CartResume } from '../../components'
export function Carrinho(){

    return <>
        

       <Container>

            <Banner>
                <img src={Logo} alt="LogoDevBurguer" />
            </Banner>
                <Title>Checkout - Pedido</Title>
                <Content>
                   <CartItems/>
                   <CartResume/> 
                </Content>

            </Container>
     
    </>
}