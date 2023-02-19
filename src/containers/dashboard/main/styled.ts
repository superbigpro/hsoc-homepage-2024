import styled from "styled-components";

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 48px;
`;

export const DashboardTitle = styled.h1`
    width: 100%;
    margin-top: 0;
    text-align: center;
`;

export const DashboardLogOutTitle = styled.p`
    margin: 0;
    padding: 0;
    width: fit-content;
    text-align: left;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    :hover{
        color: var(--color-primary);
    }
`;

export const DashboardContentDiv = styled.div`
    width: 100%;
    background-color: #252525;
    border: 1px solid #6A6A6A;
    border-radius: 10px 10px 0 0;
`;

export const DashboardContentTitleDiv = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 30px;
`;

export const DashboardContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid var(--color-white);
`;

export const DashboardContent = styled.div`
    width: 500px;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 30px;
`;

export const DashboardIntroduceDiv = styled.div`
    width: 400px;
    max-height: 100px;
    margin: 10px 0;
    margin-left: 10px;
    overflow: scroll;
    display: block;
    @media screen and (min-width: 1300px) {
    width: 540px;
    }
`;

export const DashboardContentTitle = styled.span`
    font-size: 18px;
    font-weight: 400;
`;


