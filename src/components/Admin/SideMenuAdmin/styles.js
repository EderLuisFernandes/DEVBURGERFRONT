import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
    background: #363636;
    width: 385px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    color: #fff;
    border-radius: 0 20px 0 0;
    top: 0;
    left: 0;
    
    cursor: pointer;

`;
export const Icon = styled.img`
        width: 140px;
        height: 140px;
        margin: 30px auto 20px;
`;
export const ItemContainer =styled.div`
     width: 100%;
     height: 60px;
    display: flex;
    align-items: center;
    padding: 25px 20px;
    margin: 10px 0;
    font-size: 22px;
    gap: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background: ${props => props.isActive ? '#a958a5': 'none'};

    &:hover {
    background-color: #a958a5; 
  }

    .icon{
        color: #fff;
    }
  
   
`;
export const ListLinkss = styled(Link)`
    text-decoration: none;
    color:#fff;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
  
    
    
    
`;

export const Logout =styled(Link)`
    text-decoration: none;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 25px 20px;
    margin: 10px 0;
    font-size: 22px;
    gap: 20px;
    cursor: pointer;
    color: #fff;
    position: absolute;
    bottom: 0;
    &:hover {
    background-color: #a958a5; /* cor lilás */
  }
`;

export const Arrows = styled.img`
        
        margin-right: 5px;
        
`;