
import { ContainerButton } from "./styles"
import Cesta from '../../assets/cesta.svg'

export function CartButton({ ...props }) {

    return <>
        <ContainerButton {...props}>
            <img src={Cesta} alt="Cesta para adiciona no carrinho" />
        </ContainerButton>
    </>
}