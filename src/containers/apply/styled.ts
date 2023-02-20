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
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0 ;
    height: 90%;
`;

export const FormDiv = styled.form`
    display: flex;
    width: 580px;
    z-index: 10;
    padding: 60px 100px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    border-radius: 30px;
    background-color: #171618;
    @media screen and (max-width: 1100px) and (min-width: 991px) {
        width: 560px;
    }
    @media screen and (max-width: 991px) and (min-width: 767px) {
        padding: 40px 70px;
        width: 500px;
    }
    @media screen and (max-width: 767px) and (min-width: 575px) {
        padding: 40px 60px;
        width: 460px;
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
