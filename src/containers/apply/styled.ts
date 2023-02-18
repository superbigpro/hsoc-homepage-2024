import styled from "styled-components";

export const LogoBigImage = styled.div<{ src: string }>`
	background-image: url(${(props) => props.src});
    background-position: center;
    background-attachment: fixed; 
    background-repeat: no-repeat;
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
    width: 800px;
    z-index: 10;
    padding: 60px 100px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    border-radius: 30px;
    background-color: #171618;
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
    width: 100%;
`;

export const IntroduceDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
