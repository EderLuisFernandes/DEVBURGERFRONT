import styled from "styled-components";
import ReactSelect from 'react-select'

export const Container = styled.div`
background: #efefef;
min-height: 100vh;
padding: 20px;


.css-g6bqb5-MuiTableCell-root,.css-1orzuox-MuiTableCell-root{
    font-weight: bolder;
    color:#fff;
    background: #000;
    &:first-child{
        border-top-left-radius: 20px;
    }
    &:last-child{
      border-top-right-radius: 20px;  
    }
    
}


`;
export const Menu = styled.div`
 display: flex;
 gap: 50px;
 justify-content: center;
 line-height: 40px;
 margin: 20px 0 ;
`;
export const LinkMenu = styled.a`
    color:#333232;
    padding: 0 10px;
    font-size: 14px;
    cursor: pointer;
    text-align: center;
    border: ${props => props.isActiveStatus ? '1px solid #a958a5' : ' '};
    border-radius: 30px;
    font-weight: ${props => props.isActiveStatus ? '700' : ' 400'};

    &:hover{
        cursor: pointer;
        border-bottom: 1px solid #a958a5;
    
    }
`;
export const ProductImg = styled.img`
width: 60px;
border-radius: 10px;

`;

export const ReactSelectStyle = styled(ReactSelect)`
    width: 250px;
    .css-13cymwt-control{
        cursor: pointer;
        
    }
`;