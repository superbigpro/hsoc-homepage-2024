import styled from "styled-components";

export const Wrap = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const ModalDiv = styled.div`
    margin-top: 30px;
    height: 87%;
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #171618;
    border-radius: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`;

export const IntroduceDiv = styled.div`
    width: 90%;
    margin-top: 20px;
    height: 95%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
    overflow: scroll;
`;

export const IntroduceContent = styled.p`
    font-size: 20px;
    text-align: center;
    word-break: break-all;
`;