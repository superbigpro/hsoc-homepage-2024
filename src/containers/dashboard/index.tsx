import { NextPage } from "next"
import { Props } from "next/script";
import { useEffect, useState } from "react";
import { DashboardContentTitle } from "src/components/DashboardContentTitle";
import { Instance } from "src/lib/ga/api";
import * as S from "./styled"

interface Student {
    name: string,
    studentId: string,
    phoneNumber: string,
    introduce: string;
}

interface DashboardPageProps {
    students: [Student]
}


const DashboardPage: NextPage<DashboardPageProps> = ({ students }) => {

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
                {students.map((index: Student) => {
                    console.log(`${index.name}`, "index.name");
                    <>
                        <S.DashboardContent key={index.studentId}>
                            <DashboardContentTitle title={index.name} />
                            <DashboardContentTitle style={{ position: "relative", left: "17px" }} title={index.studentId} />
                            <DashboardContentTitle style={{ position: "relative", left: "30px" }} title={index.phoneNumber} />
                            <DashboardContentTitle style={{ width: "48.5%", wordBreak: "break-all" }} title={index.introduce} />
                        </S.DashboardContent>
                    </>
                })}
            </S.DashboardContainer>
        </div >
    )
}



DashboardPage.getInitialProps = async () => {
    const instance = Instance('http://localhost:3000/api/get')
    const { data } = await instance.get('')
    return { students: data }
}

export default DashboardPage;