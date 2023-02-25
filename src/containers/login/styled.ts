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
    margin: 10rem 0 ;
    height: 90%;
`;

export const FormDiv = styled.form`
    display: flex;
    width: 550px;
    z-index: 10;
    padding: 46px 80px;
    padding-bottom: 40px;
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



