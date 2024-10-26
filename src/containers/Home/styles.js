import styled from "styled-components";
import BannerHome from '../../assets/bannerHome.svg'
import Background2 from '../../assets/bg2.png'

export const Banner = styled.div`
    background: url('${BannerHome}') center no-repeat;
    background-size: cover;
    height: 480px;

    h1{
       font-family:'road Rage', sans-serif ;
       font-size: 88px;
       color: #f4f4f4;
       right: 5%;
       top:  20%;
       position: absolute;
       
    }
`;

export const Container = styled.section`
  background: linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6)),url('${Background2}');
  background-size: cover;

 padding-bottom: 70px;

`;
