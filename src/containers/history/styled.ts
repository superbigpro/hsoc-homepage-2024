import styled from 'styled-components';

export const SectionImage = styled.div<{ src: string }>`
  width: 425px;
  height: 255px;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
  box-shadow: 0px 0px 10px 0px #00000040;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.src});

  @media screen and (max-width: 991px) {
    width: 300px;
    height: 180px;
  }

  @media screen and (max-width: 767px) {
    width: 450px;
    height: 270px;
  }

  @media screen and (max-width: 540px) {
    width: 360px;
    height: 234px;
  }

  @media screen and (max-width: 400px) {
    width: 320px;
    height: 192px;
  }
`;

export const FieldIntroduceImage = styled(SectionImage)<{ images: string[] }>`
  animation: changeFieldIntroduceImage 8s infinite;
  resize: both;

  @keyframes changeFieldIntroduceImage {
    0%,
    100% {
      background-image: url(${(props) => props.images[0]});
    }
    50% {
      background-image: url(${(props) => props.images[1]});
    }
    75% {
      background-image: url(${(props) => props.images[2]});
    }
  }
`;

export const MentoringImage = styled(SectionImage)<{ images: string[] }>`
  animation: changeMentoringImages 8s infinite;
  resize: both;

  @keyframes changeMentoringImages {
    0%,
    100% {
      background-image: url(${(props) => props.images[0]});
    }
    50% {
      background-image: url(${(props) => props.images[1]});
    }
    75% {
      background-image: url(${(props) => props.images[2]});
    }
  }
`;

export const ContestImage = styled(SectionImage)<{ images: string[] }>`
  animation: changeContestImages 8s infinite;
  resize: both;

  @keyframes changeContestImages {
    0%,
    100% {
      background-image: url(${(props) => props.images[0]});
    }
    25% {
      background-image: url(${(props) => props.images[1]});
    }
    50% {
      background-image: url(${(props) => props.images[2]});
    }
    75% {
      background-image: url(${(props) => props.images[3]});
    }
  }
`;
