import React from "react";
import { signOut } from "next-auth/react";
import { DashboardContentTitle } from "src/components/DashboardContentTitle";
import { Student } from "..";
import * as S from "./styled"

interface MainProps {
    students: Student[];
}

const Main: React.FC<MainProps> = ({ students }) => {
    return (
        <>
            <div className="container">
                <S.DashboardContainer>
                    <S.DashboardLogOutTitle onClick={() => {
                        signOut();
                    }}>로그아웃</S.DashboardLogOutTitle>
                    <S.DashboardTitle>지원서 명단</S.DashboardTitle>
                    <S.DashboardContentDiv>
                        <S.DashboardContentTitleDiv>
                            <DashboardContentTitle title="이름" />
                            <DashboardContentTitle title="학번" />
                            <DashboardContentTitle title="전화번호" />
                            <DashboardContentTitle title="자기소개" />
                        </S.DashboardContentTitleDiv>
                    </S.DashboardContentDiv>
                    {students.map((index: Student, key: number) => {
                        return (
                            <>

                                <React.Fragment key={key}>
                                    <S.DashboardContent>
                                        <DashboardContentTitle title={index.name} />
                                        <DashboardContentTitle style={{ position: "relative", left: "17px" }} title={index.studentId} />
                                        <DashboardContentTitle style={{ position: "relative", left: "30px" }} title={index.phoneNumber} />
                                        <DashboardContentTitle style={{ width: "48.5%", wordBreak: "break-all" }} title={index.introduce} />
                                    </S.DashboardContent>
                                </React.Fragment>
                            </>
                        )
                    })}
                </S.DashboardContainer>
            </div >
        </>
    )
}

export default Main