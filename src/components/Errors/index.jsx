import PropTytpes from 'prop-types'
import {ErrosContainer } from './styles'

export function Erros({children}){
    return <>
    <ErrosContainer>{children}</ErrosContainer>
    </>
}

Erros.prototype = {
    children: PropTytpes.string,
}