import { createBrowserRouter, Navigate } from "react-router-dom";

import { Home ,Carrinho,Cadastro,Login,Menu,Checkout,CompletePayment, Admin,TelaInicial} from "../containers";
import { Header,Footer} from "../components";
import { paths } from "../constants/path";
import { Validacao } from "./Validação";




export const router = createBrowserRouter([
    {

        path: '/',
        element: (
        <>
        <TelaInicial/>
    
        </>)
    },
    {
        path:'/Login',
        element: <Login/>
    },
    {
        path:'/Cadastro',
        element: <Cadastro/>
    },
    {

        path: '/Home',
        element: (
        <>
        <Header/>
        <Home/>
        <Footer/>
        </>)
    },
    {
        path: '/Cardapio',
        element: (
        <>
        <Header/>
        <Menu/>
        <Footer/>
        </>
        )
    },
    {
        path: '/Carrinho',
        element: (
            <>
            <Header/>
            <Carrinho/>
            <Footer/>
            </>
        )
    },
    {
        path: '/Checkout',
        element:(
            <>
                <Header/>
                <Checkout/>
                <Footer/>
            </>
        )
    },
    {
        path: '/Complete',
        element:(
            <>
                <Header/>
                <CompletePayment/>
                <Footer/>
            </>
        )
    },

    {
        path: paths.Orders,
        element:(
            <>
            <Validacao>
                <Admin/>
                
            </Validacao>
                 <Footer/>
           
            </>
           
        )
    },
    {
        path: paths.ListProducts,
        element:(
            <>
            <Validacao>
                <Admin/>
            </Validacao>
                 <Footer/>
           
            
           </>
        )
    },

    {
        path: paths.NewProduc,
        element:(
            <>
            <Validacao>
                <Admin/>
                </Validacao>
                 <Footer/>
                 </>
            
           
        )
    },
    {
        path: paths.EditProduct,
        element:(
            <>
            <Validacao>
                <Admin/>
            </Validacao>
                 <Footer/>
           
            
           </>
        )
    },
])