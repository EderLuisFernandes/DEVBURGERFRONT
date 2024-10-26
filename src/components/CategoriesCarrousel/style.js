import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
.carrousel-item{
    padding-right: 15px;
}
 padding: 0 47px;
`;

export const Title = styled.h2`
color:#9758a6;
font-size: 32px;
padding-top: 10px;
padding-bottom: 12px;
position: relative;
text-align: center;
font-weight: bolder;
margin-bottom: 30px;

&::after{
    content: ' ';
    position: absolute;
    width: 56px;
    height: 4px;
    background-color: #9758a6;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
`;

export const ContainerItens = styled.div`
background: url('${props => props.imageUrl}') no-repeat;
background-size: cover;
display: flex;
align-items: center;
padding: 20px 10px;
width: 100%;
height: 250px;
border-radius: 20px;


`;
export const CategoryButoon = styled(Link)`
    text-decoration: none;
    background: rgba(0,0,0,0.6);
    color: #fff;
    font-size: 17px;
    padding: 10px 7px;
    border-radius: 20px;
    margin-top: 140px;
    transition:  0.3s ease;
    font-weight: 600;
    &:hover{
        background: #9758a6;
    }
    
    `;
    