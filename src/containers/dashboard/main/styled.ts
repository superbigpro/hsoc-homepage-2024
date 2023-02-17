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
    text-align: left;
`;

export const DashboardContentDiv = styled.div`
    width: 100%;
    background-color: #252525;
    border: 1px solid #6A6A6A;
    border-radius: 10px 10px 0 0;
`;

export const DashboardContentTitleDiv = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 30px;
`;

export const DashboardContent = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 30px;
    border-bottom: 1px solid var(--color-white);
`;

export const DashboardContentTitle = styled.span`
    font-size: 18px;
    font-weight: 400;
`;


