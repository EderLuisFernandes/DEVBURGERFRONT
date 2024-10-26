import styled from "styled-components";
import BannerMenu  from "../../assets/bannerCardapio.svg"
import Backgroubd2 from "../../assets/bg2.png"
import { Link } from "react-router-dom";


export const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${Backgroubd2})
`;

export const Banner = styled.div`
    background: url(${BannerMenu});
    background-color: #000;
    background-size: cover;
    height: 380px;
    width: 100%;
    position: relative;

    h1{
        font-family:'road Rage', sans-serif ;
       font-size: 80px;
       color: #fff;
       right: 20%;
       top:  25%;
       position: absolute;
       line-height: 65px;
       span{
        line-height: 25px;
        color: #f4f4f4;
        font-size: 20px;
        display: block;
        }
    }
    

`;

export const ProdutsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 40px;
    gap:60px;
    justify-content: center;
    max-width: 1080px;
    margin: 50px auto;
`;
export const Title = styled.h2`
color: #61A120;
font-size: 32px;
padding-bottom: 12px;
position: relative;
text-align: center;
font-weight: bolder;
padding-top: 40px;

&::after{
    content: ' ';
    position: absolute;
    width: 56px;
    height: 4px;
    background: #9758A6;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
`;
export const CategoryMenu = styled.div`
display:flex;
gap: 20px;
justify-content: center;  
margin-top: 30px;

`;
export const CategoryButton =styled(Link)`
    text-decoration: none;
    font-size:20px;
    font-weight: bolder;
   
    cursor: pointer;
    padding: 7px;
    border-radius: 20px;
    line-height: 20px;
    padding-bottom: 5px;
    border: none;
    border-bottom: ${ (props) => props.$isActiveCategory && '3px solid #9758a6'};
    color:${props => props.$isActiveCategory ? '#fff ': '#9758a6'};
    background: ${props => props.$isActiveCategory ? '#9758a6': ''};
   
    &:hover{
        border-bottom: 3px solid #9758a6;
    }
 

`;