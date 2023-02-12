import type { NextPage } from "next";
import * as S from "./styled";
import { Section, SectionTemplate } from "src/components";
import LogoBig from "src/assets/png/logo-big.png";
import SixthSecurityContestJPG from "src/assets/png/6th-security-contest.jpg";
import SeventhSecurityContestJPG from "src/assets/png/7th-security-contest.jpg";
import Contest1PNG from "src/assets/png/contest-1.png";
import Contest2JPG from "src/assets/png/contest-2.jpg";
import Contest3JPG from "src/assets/png/contest-3.jpg";
import MentorJPG from "src/assets/png/mentor.jpg";

const HistoryPage: NextPage = () => {
    return (
        <main style={{ width: "100%" }}>
            <Section>
                <S.SectionContentContainer>
                    <S.LogoBigImage src={LogoBig.src} />
                    <S.TitleText>
                        보안관제 동아리
                        <br />
                        <br />
                        <strong>관제 일지</strong>
                    </S.TitleText>
                </S.SectionContentContainer>
            </Section>
            <SectionTemplate
                isSecondary
                shortDescription="보안관제에서는 이런걸 해요!"
                ShortDescriptionTextSecondary=" 2022/3/14~2022/4/14"
                title={
                    <>
                        <strong>분야별 소개</strong>
                    </>
                }
                description={
                    <>
                        네트워크, 디지털 포렌식, 시스템, 암호학, 웹의 멘토들이 자신의 분야를 발표하며 자신의 분야에 대해 알려주었어요. 
                        이를 통해 보안에 대한 기본적인 분야들을 습득할 수 있었고, 각 분야가 어떤식으로 운영되는지 알 수 있었어요.
                    </>
                }
            >
                <S.SectionImage src={MentorJPG.src} />
            </SectionTemplate>
            <SectionTemplate
                shortDescription="보안관제에서는 이런 걸 해요!"
                ShortDescriptionTextSecondary=" 2022/4/21~2022/6/27"
                title={
                    <>
                        <strong>분야별 멘토링</strong>
                    </>
                }
                description={
                    <>
                        분야별 멘토링을 통해 자신이 선택한 분야에 대해 선배들과 함께 공부하고, 문제를 풀어보며 
                        실력을 키워나갔어요. 멘토님들의 피드백을 통해 자신의 실력을 더욱 키울 수 있었어요.
                    </>
                }
            >
                <S.TeacherSectionImage src="" images={[Contest1PNG.src, Contest2JPG.src, Contest3JPG.src]} />
            </SectionTemplate>
            <SectionTemplate
                isSecondary
                shortDescription="보안관제에만 있어요!"
                ShortDescriptionTextSecondary=" 2022/9/21~2022/11/27"
                title={
                    <>
                        <strong>교내/외 해킹 대회</strong>
                    </>
                }
                description={
                    <>
                        1학기때 쌓아온 실력을 바탕으로 대회에서 실제 문제를 출제해보고, 부원들끼리
                        <br />
                        풀어보는
                        시간을 가졌어요.
                        풀어보면서 서로가 서로의 문제를 봐주고,
                        <br />
                        피드백을 주고받는 시간을 가졌어요.
                        마지막으로 외부강사님이 오셔서 문제를
                        <br />
                        봐주시고, 피드백을 주시는 시간을 가졌어요.
                    </>
                }
            >
                <S.ContestPosterImagesWrapper>
                    <S.ContestPosterImage src={SixthSecurityContestJPG.src} />
                    <S.ContestPosterImage src={SeventhSecurityContestJPG.src} />
                </S.ContestPosterImagesWrapper>
            </SectionTemplate>
        </main >
    );
};

export default HistoryPage;
