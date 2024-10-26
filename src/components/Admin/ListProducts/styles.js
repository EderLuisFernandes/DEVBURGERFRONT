import styled from "styled-components";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Checkbox from '@mui/material/Checkbox';
import TableContainer from '@mui/material/TableContainer';


export const Container = styled.div`
background: #efefef;
padding: 5px 20px;
scrollbar-width: none;
::-webkit-scrollbar {
    width: 12px;
  }


`;
export const Pesquisa = styled.label`
 margin-bottom:  10px;
 width: 100%;
 position: relative;
 input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
 input{
    width: 100%;
    border-radius: 20px;
    border: 1px solid #7D7D7D;
    height: 50px;
    font-size: 20px;
    font-style: italic;
    padding-left: 18px;
    position: relative;

 }
 button{
    background: none;
    border: none;
    position: absolute;
    top: 0;
    right: 20px;
    height: 20px;

 }
`;

export const TableContaineres = styled(TableContainer)`
    height: 600px;
    margin-top: 10px;
    scrollbar-width: none;
    .stickyHeader th{
        position: sticky;
        top:0;
        background-color: #333233;
        z-index:1;

    }
    div {
  max-height: 488px;
  overflow-y: auto;
  
}
.css-1jxw05q-MuiTableCell-root, .css-1vjdlt9-MuiTableCell-root{
    color: #fff;
    font-weight: bold;
    background: #333233;
    &:first-child{
        border-top-left-radius: 20px;
    }
    &:last-child{
        border-top-right-radius: 20px;
    }
}

`;

    
  
export const Check = styled(Checkbox)`

`;

export const Img = styled.img`
    width: 70px;
    border-radius: 20px;
`;
export const EditIcons = styled(EditOutlinedIcon)`
  cursor: pointer;
  color: #000;

`;
