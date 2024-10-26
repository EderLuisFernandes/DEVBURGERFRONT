import {Container,ContainerItens,ContainerFilho} from './styles'
import { Orders, CadastrarProducts,SideMenuAdmin,ListProduts,EditProduct,HomeLink } from '../../components'
import { useLocation } from 'react-router-dom';
import { paths } from '../../constants/path';

export function Admin(){
 const location = useLocation()  
 const path = location.pathname

 console.log(ListProduts)
  return<>
    <Container>
      <SideMenuAdmin path={path}/>

      <ContainerFilho>

      <HomeLink/>  
      
      <ContainerItens>
         {path === paths.Orders && <Orders/> }
        {path === paths.ListProducts && <ListProduts/>}
        {path === paths.NewProduc && <CadastrarProducts/>}
        {path === paths.EditProduct && <EditProduct/>}
     </ContainerItens>
     </ContainerFilho>
    </Container> 
  </>

}

