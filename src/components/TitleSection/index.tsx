import { Section } from "../Section";
import LogoBig from "src/assets/png/logo-big.png";
import * as S from "./styled";

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
    )
}