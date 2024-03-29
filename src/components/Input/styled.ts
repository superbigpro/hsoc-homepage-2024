import styled from 'styled-components';

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  margin-top: 30px;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: #e6e1e6;
  margin: 0;
  @media screen and (max-width: 575px) and (min-width: 300px) {
    font-size: 16px;
  }
`;

export const Example = styled.p`
  color: #8d8c8f;
  font-size: 16px;
  font-weight: 400;
  margin-top: 5px;
  @media screen and (max-width: 575px) and (min-width: 300px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  margin-top: 5px;
  background-color: transparent;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.15);
  border: 1px solid #2a2830;
  border-radius: 10px;
  padding: 14px;
  height: 46px;
  width: 100%;
  caret-color: auto;
  color: var(--color-white);
  transition: all 0.15s ease-in-out;
  &::-webkit-scrollbar {
    display: none;
  }
  &:focus {
    outline: none;
    background-color: #222026;
    opacity: 0.8;
  }
  &::placeholder {
    font-size: 14px;
    color: #8d8c8f;
  }
  @media screen and (max-width: 575px) and (min-width: 300px) {
    padding: 14px;
  }
`;

export const IntroduceInput = styled.textarea`
  margin-top: 5px;
  background-color: transparent;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.15);
  border: 1px solid #2a2830;
  border-radius: 16px;
  padding: 14px;
  height: 350px;
  resize: none;
  width: 100%;
  caret-color: auto;
  color: var(--color-white);
  transition: all 0.15s ease-in-out;
  &:focus {
    outline: none;
    background-color: #222026;
    opacity: 0.8;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    font-size: 14px;
    color: #8d8c8f;
  }
  @media screen and (max-width: 991px) and (min-width: 767px) {
    height: 420px;
  }
  @media screen and (max-width: 767px) and (min-width: 575px) {
    height: 360px;
  }
  @media screen and (max-width: 575px) and (min-width: 300px) {
    padding: 14px;
    height: 300px;
  }
`;

export const portfolioInput = styled(IntroduceInput)`
  height: 200px;
  @media screen and (max-width: 991px) and (min-width: 767px) {
    height: 250px;
  }
  @media screen and (max-width: 767px) and (min-width: 575px) {
    height: 200px;
  }
  @media screen and (max-width: 575px) and (min-width: 300px) {
    height: 150px;
  }
`;

export const FieldSelect = styled.select`
  margin-top: 5px;
  background-color: transparent;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.15);
  border: 1px solid #2a2830;
  border-radius: 10px;
  padding: 0 8px;
  height: 46px;
  width: 100%;
  caret-color: auto;
  appearance: none;
  outline: none;
  color: var(--color-white);
  option {
    font-size: 16px !important;
    color: var(--color-white) !important;
  }
`;

export const Message = styled.p`
  text-align: left;
  margin-left: 10px;
  font-size: 13px;
  margin-top: 5px;
  color: #ba1a1a;
`;
