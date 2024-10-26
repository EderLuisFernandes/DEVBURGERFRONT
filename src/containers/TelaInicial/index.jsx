import { useNavigate } from "react-router-dom"
import {ContainerPrincipal, Container,Header} from './styles'
import Hamburger from '../../assets/hamburguer.png'
import Logo from '../../assets/Logo1.svg'
export function TelaInicial(){

    const navigate = useNavigate()

    function Login (){
        navigate('/Login')
    }
    function Cadastrar(){
    navigate('/Cadastro')
    }
     return <>
     <Container>
        <Header>
            <nav>
                <a href="/  "> <img src={Logo}/></a>
                
                <h3>Seja Bem-Vindo</h3>
                <div className="visual">
               <button onClick={Login} >Login</button>
                <button onClick={Cadastrar}>Cadastrar</button>     
                </div>
            </nav>
        </Header>
        <ContainerPrincipal>
            <div className="parte_esquerda">
                <h1>O melhor da <span>Cidade</span> </h1>
                <div>
                <p>Feito especialmente para <span>Você!</span> </p>
                </div>
            </div>
            <div className="parte_direita">
                  <img src={Hamburger} alt="Hamburgue" />
            </div>
        </ContainerPrincipal>
     </Container>
     </>
}