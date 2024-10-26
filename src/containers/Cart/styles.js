import styled from "styled-components";
import BannerCart from '../../assets/bannerCart.svg'
import BackgrounContainer from '../../assets/bg2.png'

export const Container = styled.div`
background: url(${BackgrounContainer}) no-repeat center center;
background-size: cover;
width: 100%;
min-height: 100vh;
`;

export const Banner = styled.div`
background: url(${BannerCart})no-repeat center center;
background-size: cover;
width: 100%;
height: 240px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
img{
    width: 180px;
    height: 165px;
}
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
export const Content = styled.div`
 display: grid;
 grid-template-columns: 1fr 30%;
 width: 100%;
 max-width: 1280px;
 padding: 40px;
 margin: 0 auto;
 gap:40px;

`;

