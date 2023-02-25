import styled from "styled-components";

export const LogoBigImage = styled.div<{ src: string }>`
    position: fixed;
	background-image: url(${(props) => props.src});
    background-position: center;
    background-attachment: fixed; 
    align-self: center;
    background-size: cover;
    height: 100%;
    width: 100%;
    filter: blur(14px) brightness(0.15);
`;

export const Wrap = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;
    @media screen and (min-height: 700px){
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
`;

export const RegisterWrap = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;
    @media screen and (min-height: 1000px){
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
`;

export const ApplyWrap = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;
    @media screen and (min-height: 900px){
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
`;

export const FormDiv = styled.form`
    display: flex;
    width: 600px;
    z-index: 10;
    padding: 50px 60px;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 30px;
    background-color: #171618;
    @media screen and (max-width: 1100px) and (min-width: 991px) {
        width: 580px;
    }
    @media screen and (max-width: 991px) and (min-width: 767px) {
        padding: 40px 70px;
        width: 520px;
    }
    @media screen and (max-width: 767px) and (min-width: 575px) {
        padding: 40px 60px;
        width: 480px;
    }  
    @media screen and (max-width: 575px) and (min-width: 300px) {
        padding: 40px 40px;
        width: 400px;
    };
`;

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export const IntroduceDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const LinkButton = styled.p`
    color: var(--color-white);
    a{
        text-decoration: none !important;
        color: #7F69F6 !important;
        margin-left: 6px;
        transition: opacity 0.2s ease-in-out;
        &:hover {
            opacity: 0.8;
		}
    }
`;
