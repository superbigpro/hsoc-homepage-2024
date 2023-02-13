import styled from "styled-components";
import Link from "next/link";

export const LogoBigImage = styled.div<{ src: string }>`
	background-image: url(${(props) => props.src});
    background-position: center;
    background-attachment: fixed; 
    align-self: center;
    height: 93%;
    position: absolute;
    background-size: cover;
    width: 100%;
    filter: blur(14px) brightness(0.15);
`;

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 4rem 0;
    height: 90%;
`;

export const FormDiv = styled.form`
    display: flex;
    width: 400px;
    z-index: 10;
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


export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 30px;
    width: 85%;
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 600;
    color: var(--color-white);
    margin: 0;
`;

export const Example = styled.p`
    color: var(--color-white);
    font-size: 15px;
    opacity: 0.5;
    margin-top: 5px;
`;

export const Input = styled.textarea`
    margin-top: 10px;
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
    margin-top: 5px;
    color: red;
`;

export const Button = styled.button`
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


