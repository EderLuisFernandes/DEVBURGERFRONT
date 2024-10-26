import { Container, ItemContainer, ListLinkss, Logout, Icon, Arrows} from "./styles"
import { listLinks } from "./menu-List"
import Logo1 from '../../../assets/Logo1.svg'
import Exit from '../../../assets/exit.png'
import { useUser } from "../../../hooks/UserContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";



export function SideMenuAdmin({ path }) {
    const { logout } = useUser()
    const navigate = useNavigate()


    function logouting() {
        logout()
        navigate('/')
    }

    
    return <>
        <Container>
            <Icon src={Logo1} alt="" />
            {listLinks.map(lista => (
                    <ItemContainer
                     key={lista.id} 
                     isActive={path === lista.link}
                     onClick={()=>mudarParaListaProduto(lista.id)}
                     >
                        <img src={lista.icon} alt='imagen' className="icon" />
                        <ListLinkss to={lista.link}> {lista.label} </ListLinkss>
                         {lista.hasArrow && <Arrows src={lista.Arrow} />}
                
                    </ItemContainer>


                ))}

            <Logout onClick={logouting} > <img src={Exit} alt="Sair" /> Sair</Logout>
        </Container>
    </>
}

SideMenuAdmin.propType = {
    path: PropTypes.string
}