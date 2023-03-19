import styled from 'styled-components';

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
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;
  width: 100%;
  @media screen and (max-width: 575px) {
    margin: 1rem 0;
  }
`;

export const LoginWrap = styled(Wrap)`
  @media screen and (min-height: 700px) {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;

export const RegisterWrap = styled(Wrap)`
  @media screen and (min-height: 1000px) {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;

export const ApplyWrap = styled(Wrap)`
  @media screen and (min-height: 1300px) {
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
  @media screen and (max-width: 575px) and (min-width: 500px) {
    background-color: transparent;
    padding: 40px;
    width: 400px;
  }
  @media screen and (max-width: 500px) and (min-width: 300px) {
    background-color: transparent;
    padding: 20px;
    width: 100%;
  }
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
  margin-top: 30px;
  color: var(--color-white);
  a {
    text-decoration: none !important;
    color: #7f69f6 !important;
    margin-left: 6px;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ErrorWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessageDiv = styled.div`
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
  a {
    text-decoration: none !important;
    color: #7f69f6 !important;
    font-size: 18px;
    margin: 0 6px;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const GetMyInfoMessageDiv = styled.div`
  border: 1px solid red;
  width: 100%;
`;

export const GetMyInfoMessage = styled.p`
  cursor: pointer;
  /* color: #7F69F6; */
  align-self: center;
  color: var(--color-primary);
  font-size: 14px;
  width: 100%;
  text-align: right;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
