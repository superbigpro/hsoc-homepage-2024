import styled from "styled-components";

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    margin-top: 30px;
`;

export const Title = styled.h1`
    font-size: 18px;
    font-weight: 500;
    color: #E6E1E6;
    margin: 0;
`;

export const Example = styled.p`
    color: #8D8C8F;
    font-size: 16px;
    font-weight: 400;
    margin-top: 5px;
`;

export const Input = styled.input`
    margin-top: 5px;
    background-color: transparent;
    box-shadow: 5px 7px rgba(0,0,0,0.15);
    border: 1px solid #2A2830;
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
    color: #BA1A1A;
`;

