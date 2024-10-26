import { paths } from "../../../constants/path";
import { useLocation } from "react-router-dom";
import { Container } from "./styles";
const lista = {
[paths.Orders]: 'Pedidos' ,
[paths.Products]:'Produtos',
[paths.ListProducts]:'Lista de Produtos',
[paths.NewProduc]:'Cadastrar Produtos', 
[paths.EditProduct]:'Editar Produtos',

}

export function HomeLink(){
    const location =useLocation()
    const locationName = location.pathname
    const sideList = lista[locationName] || 'Dashboard';

    let Gerenciar = 'Gerenciar'
    if(locationName.includes(paths.Products)){
        Gerenciar += ' >  Produtos'
    }
return <>
    <Container>
        <span className="gerenciar">{Gerenciar}</span> {' > '} <span>{sideList}</span>
    </Container>
</>

}