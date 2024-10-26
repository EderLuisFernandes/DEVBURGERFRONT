import styled from "styled-components";

export const Container = styled.div`
display: flex;
gap: 40px;
padding: 20px;
flex-direction: column;
align-items: center;
border-radius: 20px;
cursor: grab;
position: relative;
background-color: #fff;
-webkit-box-shadow: 0px 3px 36px -1px rgba(0,0,0,0.56);
-moz-box-shadow: 0px 7px 36px -1px rgba(0,0,0,0.56);
box-shadow: 0px 7px 36px -1px rgba(0,0,0,0.56);

div{
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  
    
    p{
        font-size: 18px;
        color: #FF8c05;
        line-height: 20px;
        font-weight: 700;
        margin-top: 40px;
    }
    strong{
        font-size: 22px;
        color: #363636;
        font-weight: 800;
        line-height: 38px;
        
    }
}
`;

export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    top:-50px;

`;

