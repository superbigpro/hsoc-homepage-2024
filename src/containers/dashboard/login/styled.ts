import styled from "styled-components";

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10rem 0 ;
    height: 90%;
`;

export const FormDiv = styled.form`
    display: flex;
    width: 550px;
    z-index: 10;
    padding: 30px;
    padding-bottom: 40px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    border-radius: 1rem;
    background-color: #171618;
    border: 1px solid #323232;
    @media screen and (max-width: 1100px) and (min-width: 991px) {
        width: 500px;
    }
    @media screen and (max-width: 991px) and (min-width: 575px) {
        width: 450px;
    }
    @media screen and (max-width: 767px) and (min-width: 500px) {
        width: 400px;
    }  
    @media screen and (max-width: 500px) and (min-width: 300px) {
        width: 380px;
    };
`;


export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 85%;
`;

export const Button = styled.button`
    margin-top: 30px;
    text-align: center;
    width: 60%;
    border-radius: .3rem;
    border: none;
    padding: 15px 0;
    font-size: 1rem;
    font-weight: 550;
    color: var(--color-white);
    background-color: var(--color-button);
    transition: all 0.3s ease-in-out;
    &:hover{
        cursor: pointer;
        background-color:  var(--color-primary);
    }
`;


