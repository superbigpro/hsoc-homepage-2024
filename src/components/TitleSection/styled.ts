import styled from 'styled-components';

export const TitleText = styled.p`
  color: var(--color-white);
  font-size: 40px;
  font-weight: 200;
  line-height: 40px;
  text-align: center;

  strong {
    font-weight: 700;
  }

  @media screen and (max-width: 991px) {
    font-size: 34px;
    line-height: 45px;
  }

  @media screen and (max-width: 575px) {
    font-size: 30px;
    line-height: 39px;
  }
`;

export const LogoBigImage = styled.div<{ src: string }>`
  width: 300px;
  height: 300px;
  opacity: 0.9;
  background-size: cover;
  background-image: url(${(props) => props.src});
  filter: drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.25));
`;

export const SectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
