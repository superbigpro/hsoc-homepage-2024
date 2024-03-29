import LogoBig from '@/assets/png/logo-big.png';

import { Section } from '../Section';

import * as S from './styled';

interface TitleSectionProps {
  title: string;
}

export const TitleSection: React.FC<TitleSectionProps> = ({ title }) => {
  return (
    <Section>
      <S.SectionContentContainer>
        <S.LogoBigImage src={LogoBig.src} />
        <S.TitleText>
          보안관제 동아리
          <br />
          <br />
          <strong>{title}</strong>
        </S.TitleText>
      </S.SectionContentContainer>
    </Section>
  );
};
