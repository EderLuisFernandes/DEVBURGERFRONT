import styled from "styled-components";


export const ProductImage = styled.img`
 background: #ccc;
 border-radius: 16px;
 padding: 10px;
 height: 80px;
 width: 90px;
`;

export const ButtonGroup = styled.div`
display:flex;
align-items: center;
gap: 12px;
button{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: #fff;
    border: none;
    background-color: #9758a6;
    border-radius: 0 50px 0 150px;
    transition:  all 0.4s;
    &:hover{
        background-color: #6f357c;
    }
}

`;
export const EmpetyCart = styled.p`
font-size: 20px;
font-weight: bolder;
text-align: center;

`;
export const TotalPrice = styled.p`
font-weight: bolder;
`;
export const TrashImage = styled.img`
cursor: pointer;
width: 50px;
height: 30px;

`;