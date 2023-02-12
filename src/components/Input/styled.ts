import styled from "styled-components";

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

