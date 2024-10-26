
import styled from "styled-components";


export const Container = styled.div`
background-color: #fff;
border-radius: 20px;
margin-bottom: 20px;
display: flex;
justify-content: space-between;
flex-direction: column;

*{
    color: #484848;
    font-weight: 500;
}

.container-top{
    display: grid;
    grid-gap: 10px 30%;
    grid-template-areas: 
    'title title' 
     'items items-price'  
     'delivery-tax delivery-tax-price'
    ;
}
.title{
     grid-area: title;
     font-size: 20px;
     font-weight: 700;
     margin-bottom: 20px;
     background: #333232;
     color: #fff;
     border-radius: 20px 20px 0 0;
     text-align: center;
     padding: 15px;
    
    }
.items{
    grid-area: items;
    padding-left: 20px;
}
.items-price{grid-area: items-price;padding-right: 20px;}
.delivery-tax{grid-area: delivery-tax;padding-left: 20px;}
.delivery-tax-price{grid-area: delivery-tax-price}

.container-bottom{
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    margin-top: 24px;
    padding: 20px;
    *{
    font-weight: bold;
}
}
`;
