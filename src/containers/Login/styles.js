import styled from "styled-components";
import BackgroudPrincipal from '../../assets/bg.svg'
import Backgoud2 from '../../assets/bg2.png'
import { Link as ReactLink } from "react-router-dom";
import bg from '../../assets/bg.svg'

export const Body = styled.body`
        background: url(${bg}) center center no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        flex-direction: column;
        position: relative;
        .btn{
            position: absolute;
            top: 18px;
            left: 18px;
            width: 150px;
         border-radius: 20px;
         border: none;
         background-color: rgba(151,88,166, 0.7);
         color:#fff;
         font-weight: bold;
         font-size: 15px;
        }
`;
export const Container = styled.div`
    background: url(${BackgroudPrincipal}) center center no-repeat;
    background-size: cover;
    position: relative;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.35);
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
    box-shadow: 0 0 15px rgba(151, 88, 166, 1) ;
    
`;
export const FormContainer = styled.div`
    background: url(${Backgoud2});
    position: absolute;
    top: 0; 
    transition: all 0.6s ease-out; 
    width: 50%;
    color: #Fff;
    height: 100%;
`;  

export const Form =styled.form`   
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;
 a{
  color: #fff;
  outline: none;
  text-decoration: none;
 }
 h2{
    font-size: 40px;
 }


    `;
    
export const Input = styled.input`
    background-color: #ccc;
    border: none;
    padding: 10px 15px;
    margin: 8px 0;
    font-size: 13px;
    outline: none;
    border-radius: 8px;
    width: 100%;`;

    export const SocialIcons = styled.div`margin: 20px 0;
    display: flex;
    justify-content: center;
    gap: 8px;

    a {
    border: 1px solid ;
    border-radius: 20%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    color: #fff;
}`;
export const ToggleContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  width: 50%;
  height: 100%;
  border-radius: 150px 0 0 150px  ;
  box-shadow:0 0 15px ;
`;

export const Toggle = styled.div`right: 0;`;

export const TogglePanel = styled.div`
display: flex;
flex-direction: column;
color: #fff;
font-weight: bolder;
 img{
  width: 260px;
 }
`;
export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #fff;
    background-color: transparent;
    text-align: center;
    border: solid 1px rgba(151, 88, 166, 1);
    padding: 10px 45px;
    font-size: 15px;
    border-radius: 10px;
    font-weight: bolder;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 10px;
    &:hover{
        background-color: rgba(151, 88, 166, 0.1);
    }
`;