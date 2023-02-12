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

export const Wrap = styled.div`
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

export const LoginFrom = styled.form`
    display: flex;
    width: 400px;
    padding: 30px 0;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    background-color: #171717;
    border: 1px solid #323232;
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 380px;
    };
`;


export const UserDiv = styled.div`
    text-align: right;
    margin-bottom: 30px;
    width: 85%;
`;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Username = styled.textarea`
    background-color: rgba(0,0,0,0.5);
    border: 1px solid #323232;
    border-radius: 10px;
    padding: 15px 10px;
    resize: none;
    height: 50px;
    width: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
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
    text-align: left;
    margin-left: 10px;
    font-size: 13px;
    color: red;
`;

export const UserMessage = styled(Message)`
`;

export const PasswordDiv = styled(UserDiv)`
    margin-bottom: 0;
`;

export const Password = styled(Username)`
    height: 130px;
`;

export const LoginButton = styled.button`
    margin-top: 30px;
    text-align: center;
    width: 85%;
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
`;


