import styled from "styled-components";

export const ButtonContainer = styled.button`
background-color: rgba(151, 88, 166, 1);
color: #fff;
border: solid 1px transparent;
border-radius: 10px;
font-weight: bolder;
letter-spacing: 0.5px;
text-transform: uppercase;
margin-top: 10px;
width: 100%;
height: 40px;
font-size: 26px;
font-family: 'road Rage', sans-serif ;

&:hover{
    background-color: rgba(151, 88, 166, 0.3);
    border: 4px dashed #fff;
}
`;