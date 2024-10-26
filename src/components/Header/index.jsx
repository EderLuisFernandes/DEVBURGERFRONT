import {
    Container,
    HeaderLink,
    LinkContainer,
    Logout,
    Navigation,
    Options,
    Profile,
    Content,
    Carrinho
} from "./styles"

import { useNavigate,useResolvedPath } from "react-router-dom";

import {UserCircleCheck,ShoppingCart} from '@phosphor-icons/react';
import { useUser } from "../../hooks/UserContext";
import { useCart } from "../../hooks/CartContext";

export function Header() {
    const navigate = useNavigate()
    const {pathname} = useResolvedPath()
    const {logout,userInfo} = useUser()
    const {cartProducts} = useCart()
    const totalItems = cartProducts.reduce((sum, product) => sum + product.quantity, 0);
    function logoutUser(){
        logout();
        navigate('/')
    }
    return <>
        <Container>
            <Content>
            <Navigation>
                <div>
                    <HeaderLink to="/Home" $isActive={pathname === '/Home'} >
                        Home
                    </HeaderLink>
                    <hr />
                    <HeaderLink to="/Cardapio" $isActive={pathname === '/Cardapio'} >
                        Cardápio
                    </HeaderLink>
                </div>
            </Navigation>
            <Options>
                <Profile>
                <UserCircleCheck size={35} color="#eeeae3" />
                    <div>
                        <p>Olá, <span>{userInfo.name}</span></p>
                        <Logout
                            onClick={logoutUser}
                        >Sair</Logout>
                    </div>
                </Profile>

                <LinkContainer to ="/Carrinho" >
                <Carrinho size={28} color="#eeeae3"/> 
                  <span>{totalItems}</span>  
        
                <HeaderLink to ="/Carrinho" $isActive={pathname === '/Carrinho'}>Carrinho</HeaderLink>
            </LinkContainer>
            </Options>
            
            </Content>
        </Container>
    </>
}