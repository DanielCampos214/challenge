import { css } from "styled-components";
import styled from "styled-components";

export const ContainerItens = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #F5F5F5;
`
export const LogoImage = styled.img`
    width: 400px;
    margin-top: 3pc;
    @media screen {
     width: 200px;  
    }
`

export const CardLogin = styled.div`
    width: 300px;
    height: 650px;
    margin-top: 5pc;
    background: #FFFFFF;
    box-shadow: 1.1px 1.7px 5px rgba(0, 0, 0, 0.22);
    display: flex;
    align-items: center;
    flex-direction: column;

    label{
    color: #AAAAAA;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    margin-right: 100px;
    margin-top: 10px;
    }
`
export const FerrariImage = styled.img`
    width: 100px;
    margin-top: 20px;
`
export const Title = styled.h1`
    text-align: center;
    color: #CC0000;
    margin-top: 40px;

`
export const MessageError = styled.h1`
    text-align: center;
    margin-top: 50px;
    color: #CC0000;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    @media screen {
     font-size: 22px ;
    }

`
export const Input = styled.input`
    background: #F1F2F2;
    border: 1px solid #E2E2E2;
`
export const Button = styled.button`
    ${(props) => css`
    background: ${props.disabled ? '#e2e2e2' : '#CC0000'};
    `}
    height: 42px;
    width: 80px;
    border: none;
    border-radius: 5px;
    margin-top: 8px;
    cursor: pointer;

    color: #FFFFFF;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;

`