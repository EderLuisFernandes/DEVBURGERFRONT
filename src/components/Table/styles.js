import styled from "styled-components";

export const Root =styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    border-radius: 20px;
    
`;

export const Header = styled.thead`
`;

export const Tr = styled.tr``;


export const Th = styled.th`
 padding: 16px;
 text-align: left;
 color: #fff;
 background: #333232;
 &:last-child{
border-top-right-radius: 20px;
 }
 &:first-child{
    border-top-left-radius: 20px;
 }
 
 
 border-bottom: 1px solid #cdcdcd;

`;

export const Td = styled.td`
 padding: 16px;
 color: #484848;
 font-weight: bolder;
 line-height: 115%;
 border-bottom: 1px solid #ccc;
`;

export const Body = styled.tbody``;

