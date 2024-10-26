import styled from "styled-components";


export const Container = styled.div`
.carrousel-item{
    padding-right: 27px;
}

.react-multi-carousel-list{
    overflow: visible;
}
.react-multiple-carousel__arrow{
    background-color:#9758a6 ;

    &:hover{
        background-color:#5C2669;
        ;
    }
}
.react-multiple-carousel__arrow--left{
    left: 0;
}
.react-multiple-carousel__arrow--right {
    right: calc(0% + 1px);
}

 overflow-x: hidden;
 padding: 34px 73px;
 
`;

export const Title = styled.h2`
color: #61A120;
font-size: 32px;
padding-bottom: 12px;
position: relative;
text-align: center;
font-weight: bolder;
margin: 70px 0;

&::after{
    content: ' ';
    position: absolute;
    width: 56px;
    height: 4px;
    background-color: #61A120;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
`;