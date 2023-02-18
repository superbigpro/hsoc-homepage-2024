import styled from "styled-components";
import Link from "next/link";

export const LogoBigImage = styled.div<{ src: string }>`
	background-image: url(${(props) => props.src});
    background-position: center;
    background-attachment: fixed; 
    align-self: center;
    height: 150%;
    position: absolute;
    background-size: cover;
    width: 100%;
    filter: blur(14px) brightness(0.15);
    @media screen and (max-width: 991px) and (min-width: 575px) {
        height: 140%;
    }
    @media screen and (max-width: 767px) and (min-width: 575px) {
        height: 130%;
    }   
    @media screen and (max-width: 575px) and (min-width: 300px) {
        height: 120%;
    }
`;

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0 ;
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
    .effect-container {
        position: relative;
        overflow: hidden;
        --effect-name: ripple;
        --effect-duration: 1000ms;
        --effect-top: 0px;
        --effect-left: 0px;
        --effect-height: 100px;
        --effect-width: 100px;
        --effect-color: #fff;
    }
    .effect-container::before{
        content: "";
        position: absolute;
        opacity: 0.3;
        top: var(--effect-top);
        left: var(--effect-left);
        height: var(--effect-height);
        width: var(--effect-width);
        border-radius: 50%;
        transform: scale(0);
        background: var(--effect-color);
    }
     .effect-container.active::before{
        border-radius: 50%;
        animation: ripple var(--effect-duration) linear forwards;
    }

    @keyframes ripple {
        from {
        transform: scale(0);

        } to {
            transform: scale(6);
            opacity: 0;
        }
    }
`;

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 85%;
`;

export const IntroduceDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
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
`;


