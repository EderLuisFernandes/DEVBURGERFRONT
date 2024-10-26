import Pediddo from '../../../assets/pedidos.png'
import Produtos from '../../../assets/produtos.png'
import adicionarProd from '../../../assets/adicionar.png'
import Arrow from '../../../assets/arrow.png'
import { paths } from '../../../constants/path'

export const listLinks = [

    {
        id:1,
        label: 'Pedidos',
        link: paths.Orders,
        icon: Pediddo,
        hasArrow: true,
        

    },
    {

        id:2,
        label: 'Listar Produtos',
        link: paths.ListProducts,
        icon: Produtos,
        hasArrow: false,
    }, 
         
    {
        id:3,
        label: 'Cadastrar Produtos',
        link: paths.NewProduc,
        icon: adicionarProd,
        hasArrow: false,

    },
]