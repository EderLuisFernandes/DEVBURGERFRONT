import PropTytpes from 'prop-types'
import { ButtonContainer } from "./styles"


export function Button({ children, ...props }) {
    return <ButtonContainer {...props}>{children}</ButtonContainer>
}

Button.prototype = {
    children: PropTytpes.string,
}