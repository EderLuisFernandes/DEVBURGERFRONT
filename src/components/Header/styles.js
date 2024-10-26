import styled from "styled-components";
import { Link } from "react-router-dom";
import {ShoppingCart} from '@phosphor-icons/react';

export const  Container = styled.div`
 
background-color: #1f1f1f;
height: 72px;
width: 100%;
padding:  0 56px;
`;
export const Content = styled.div`
 display: flex;
 align-items: center;
 width: 100%;
 max-width: 1280px;
 justify-content: space-between;
    margin: 0 auto;

`;
export const  Navigation = styled.nav`
 display: flex;
 align-items: center;
 justify-content: center;
 height: 72px;
 
 div{
    margin-left: 56px;
    gap:20px;
    display: flex;
    align-items: center;
    justify-content: center;
   
    hr{
    height: 24px;
    border: 1px solid #6f6f6f;

 }
 }
 

`; 

export const  HeaderLink = styled(Link)`
      text-decoration: none;
      border-radius: 7px;
      color: ${ props => props.$isActive ? '#9758a6' : '#fff'};
      border-bottom: ${props => props.$isActive? '1px solid #9758a6 ' : ' '};
      font-size: 14px;
     transition: color 200ms;

      &:hover{
        color:#9758a6;
      }

`; 

export const  Options = styled.div`
display: flex;
align-items: center;
justify-content: center;
color:#fff;
gap: 48px;
`; 

export const  Profile = styled.div`
display: flex;
gap: 12px;
align-items: center;
font-size: 14px;
div{
    p{
        color: #fff;
        line-height: 90%;
        font-weight: 300;
        
        span{
        color: #5C2669;
        font-weight: bolder;
        font-size: 16px;
    }
    }
    
}
`;

export const  Logout = styled.button`
    color: #ff3205;
    background: transparent;
    border: none;
    text-decoration: none;
    
`; 

export const  LinkContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 7px;
  border-radius: 20px;
  border-bottom: ${props => props.$isActive ? '1px solid #5C2669': ''};
  
  
  &:hover{
        color:#9758a6;
        
      }
      span{
        position: absolute;
        top: 12px;
        right: 116px;
        color: #fff;
        text-align: center;
        padding:3px;
        height: 22px;
        display: flex;
        background: orange;
        backdrop-filter: blur(10px);
        border-radius: 50px;
        align-items: center;
      }

  
` ;

export const Carrinho = styled(ShoppingCart)`
  color: #fff;
  width: 28px;
  position: relative;
`;

