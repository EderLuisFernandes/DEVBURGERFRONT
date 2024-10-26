# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Criando o projeto  fiz Home ROUTE(/)
## CARDAPIO(/CARDAPIO)
## CARRINHO(/CARRINHO)
## E O PAGAMANETO USEI O STRIPE
# DEPEDENCIAS USEI
### REACT-ROUTER-DOM / REACT-ICON /react-toastify / styled-components /yup
### react-multi-carousel / prop-types /axios /phosphor-icons/react /stripe/react-stripe-js
## hookform/resolvers

################################################################################################

## Verificando se o usuario é admin ou não colocando na propria Rota e bloqueadno a rota para que quem não for admin ele nao oconsiga ver a rota
# codigo - ↓
const  Verificacao = ({Children}) =>{
    const {userInfo} = useUser();
    if(!userInfo?.admin){
        return <Navigate to = '/'/>
    }

    return Children
}

### Usar o Materiaaa.... e vamso usa ro MUI