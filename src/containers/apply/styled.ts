import styled from "styled-components";
import Link from "next/link";

export const LogoBigImage = styled.div<{ src: string }>`
	background-image: url(${(props) => props.src});
    background-position: center;
    background-attachment: fixed; 
    align-self: center;
    height: 90vh;
    position: absolute;
    background-size: cover;
    width: 100vw;
    filter: blur(14px) brightness(0.15);
`;

export const Wrap = styled.section`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
`;

export const FormIConDiv = styled.div`
    background-color: #323232;
    padding: 1.5rem;
    border-radius: 50%;
    margin-bottom: 2.5rem;
`;

export const LoginFrom = styled.form`
    display: flex;
    width: 400px;
    height: 330px;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    background-color: #171717;
    border: 1px solid #323232;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 350px;
        height: 280px;
    };
`;

export const SignUpFrom = styled(LoginFrom)`
    height: 400px;
`;

export const UserDiv = styled.div`
    text-align: right;
    margin-bottom: 30px;
    height: 50px;
    width: 80%;
`;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Username = styled.input`
    background-color: rgba(0,0,0,0.5);
    border: 1px solid #323232;
    border-radius: 10px;
    height: 50px;
    padding-left: 10px;
    z-index: 7;
    width: 100%;
    caret-color: auto; 
    color: var(--color-white);
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #d1cccc;
    }
`;

export const Message = styled.p`
    color: red;
    font-size: 12px;
    position: relative;
    bottom: 25px;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        position: relative;
        bottom: 20px;
    };
`;

export const UserMessage = styled(Message)`
    bottom: 33px;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        position: relative;
        bottom: 25px;
    };
`;

export const PasswordDiv = styled(UserDiv)`
    margin-bottom: 0;
`;

export const Password = styled(Username)`
`;

export const CheckPassword = styled(Username)``;

export const LoginButton = styled.button`
    margin-top: 30px;
    text-align: center;
    width: 80%;
    border-radius: .3rem;
    border: none;
    padding: 10px;
    font-size: 1rem;
    font-weight: 550;
    color: var(--color-white);
    background-color: #6A6A6A;
    transition: all 0.2s ease-in-out;
    &:hover{
        cursor: pointer;
        background-color: #797474;
    }
    @media screen and (max-width: 500px) and (min-width: 300px) {
        font-size: 1.5rem;
    };
`;

export const LinkDiv = styled.div`
    margin-top: 1.5rem;
    font-size: 14px;
    color: var(--color-white);
`;

export const LinkStyle = styled(Link)`
    transition: opacity 0.3s ease-in-out;
    color: var(--color-white);
    opacity: 0.6;
    &:hover{
        cursor: pointer;
        opacity: 1;
    }
`;


export const Doc = styled.p`
    font-weight: 350;
    font-size: .7rem;
    text-align: center;
    position: absolute;
    bottom: 0;
`
