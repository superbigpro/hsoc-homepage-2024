import { NextPage } from "next"
import { DashboardContentTitle } from "src/components/DashboardContentTitle";
import * as S from "./styled"

const DashboardPage: NextPage = () => {
    return (
        <div className="container">
            <S.DashboardContainer>
                <S.DashboardTitle>지원서 명단</S.DashboardTitle>
                <S.DashboardContentDiv>
                    <S.DashboardContentTitleDiv>
                        <DashboardContentTitle title="이름" />
                        <DashboardContentTitle title="학번" />
                        <DashboardContentTitle title="전화번호" />
                        <DashboardContentTitle title="자기소개" />
                    </S.DashboardContentTitleDiv>
                </S.DashboardContentDiv>
                <S.DashboardContent>
                    <DashboardContentTitle title="최근원" />
                    <DashboardContentTitle style={{position: "relative", left: "17px"}} title="C1116" />
                    <DashboardContentTitle style={{position: "relative", left: "30px"}} title="010-4692-7471" />
                    <DashboardContentTitle style={{width: "48.5%", wordBreak: "break-all"}} title="안녕하세여 최근원입니다. 현재 풀스택 개발자 이고요, choi138.site라는 영화 웹 사이트를 개발 했습니다. 오늘도 너무 아름답네요. sdfgdsfgdsgdfsdfgdsfgdsgdfsertewmbmcvibvcuiyciuzxyvzxewrtbwemtnnebrm" />
                </S.DashboardContent>
            </S.DashboardContainer>
        </div>
    )
}

export default DashboardPage;