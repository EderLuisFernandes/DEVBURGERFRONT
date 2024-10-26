import styled from "styled-components"
import background from '../../assets/bg.svg'
import Logo from '../../assets/logoimg.png'
import background2 from '../../assets/bg2.png'

export const Container = styled.div`
width: 100%;
height: 100vh;
`;

export const Header = styled.header`
background: url(${background})no-repeat center center;
background-size: cover;
display: flex;
height: 86px;
align-items: center;    
color:#fff; 

nav{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    color:#fff; 
img{
    width: 80px;
    height: 80px;
}
h3{
    font-size: 20px; 
    text-shadow: 0 0 15px rgba(151, 88, 166, 1);
    font-weight: bolder;
}
    a{  
        text-align: center;
        text-decoration: none;
      
        }
        

.visual{
    display: flex;
    gap: 10px;
button{
    background: none;
    border: none;
    border: 1px solid rgba(151,88,166,1);
    border-radius: 20px;
    padding:  0 10px;
    color:#Fff;
    font-weight: bolder;
    font-size:20px;
    &:hover{
        background-color: rgba(151, 88, 166, 0.6);
       
    }
}
}
}
`;

export const ContainerPrincipal = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
gap: 30px;
color: #Fff;
background: linear-gradient( rgba(0,0,0,0.8),rgba(0,0,0) ), url(${background2}) no-repeat center center;
background-size: cover;
height: 100vh;
.parte_esquerda{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 30px;
h1{
   
    font-size: 55px;
    line-height: 47px;
    margin-bottom: 10px;
    span{

        font-size: 70px;
        font-family: 'road Rage', sans-serif ;
        color: rgba(151, 88, 166, 1);
    }
}
div{
   p{
    font-size: 18px;
    span{
    font-size: 25px;
    font-family: 'road Rage', sans-serif ;
    color: rgba(151, 88, 166, 1);}
} 
}


}
.parte_direita{
    height: 100%;
}
img{
        margin: 39px 0;
        height: 522px;
        filter: drop-shadow( 0 0 10px rgba(255, 255, 255, 0.6))   

}
`;
