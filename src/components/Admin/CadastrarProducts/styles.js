import styled from "styled-components";
import { Button } from '../../Button';
import ReactSelect from 'react-select';

export const Container = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;

 form {
    background: #363636;
    color: #fff;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 0 10px #000;
    min-width: 39%;
    margin-bottom: 32px;
 }
`; 

export const Label = styled.p`
    font-size: 18px;
    color: #fff;
    margin-bottom: 14px;
`; 
export const LabelUpload = styled.label`
 cursor: pointer;
 display: flex;
 height: 52px;
 padding:  0 20px;
 align-items: center;
 border: 1px dashed #fff;
 border-radius: 10px;
 text-align: center;
 justify-content: center;
 gap: 10px;
 margin: 10px 0 10px 0;
 input{
    opacity: 0;
    width: 1px;
 }
 div{
    margin-top: 4px;
 }

`;

export const Input = styled.input`
    height: 50px;
    padding: 0 10px;
    border-radius: 10px;
    border: none;
    margin-bottom: 10px;
    width: 100%;
    font-size: 18px;
    min-width: 280px;
`; 
export const ButtonStyle = styled(Button)`
 font-family: 'Poppins', sans-serif;
 font-size: 18px;
 margin-top: 60px;
 
&:hover{
    border: none;
}`;

export const ReactSelects = styled(ReactSelect)`
        color: black;
        font-weight: bold;
        padding: 4px;
`;