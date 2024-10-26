import {createGlobalStyle} from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-multi-carousel/lib/styles.css';

const globalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Poppins", sans-serif;
    }
    
    .Toastify__toast--success {
         background-color: rgba(151, 88, 166, 1) !important;
         color: #fff;
         font-weight: bolder;
         height: 30px;
         width: 350px;
         right: 0;
         top: 0;
         position: absolute;
}
.Toastify__toast--error{
    font-weight: bolder;
         height: 20px;
         background-color: #a8594d;
         color: #fff;
         right: 0;
         top: 0;
         position: absolute;
}

    button{
        cursor: pointer;
    }
  
`

export default globalStyles;