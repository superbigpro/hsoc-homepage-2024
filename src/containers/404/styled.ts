import styled from "styled-components";

export const Wrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const Line = styled.span`
    height: 30px;
    border: 1px solid #fafafa;
    margin: 0 20px;
`;

export const Message = styled.p`
    font-size: 18px;
`;