import React from "react";
import { signOut } from "next-auth/react";
import { DashboardContentTitle } from "src/components/DashboardContentTitle";
import * as S from "./styled"
import { useRouter } from "next/router";
import Modal from "../modal";
import Link from "next/link";
import { Student } from "src/lib/ga/interface";

interface MainProps {
    students: Student[];
}

const Main: React.FC<MainProps> = ({ students }) => {
    const router = useRouter();
    const id = router.query.id
    return (
        <>
            <div className="container">
                <S.DashboardContainer>
                    <S.DashboardTitle>지원서 명단</S.DashboardTitle>
                    <S.DashboardContentDiv>
                        <S.DashboardContentTitleDiv>
                            <DashboardContentTitle title="아이디" />
                            <DashboardContentTitle title="이름" style={{ position: "relative", right: "15px" }} />
                            <DashboardContentTitle title="학번" style={{ marginRight: "20px" }} />
                            <DashboardContentTitle title="전화번호" />
                            <DashboardContentTitle title="자기소개" style={{ marginLeft: "40px" }} />
                        </S.DashboardContentTitleDiv>
                    </S.DashboardContentDiv>
                    {students.map((index: Student, i: number) => {
                        return (
                            <>
                                <S.DashboardContentWrapper>
                                    <S.DashboardContent key={i}>
                                        <DashboardContentTitle title={index.id.toString()} style={{ width: "20px" }} />
                                        <DashboardContentTitle title={index.name} style={{ marginLeft: "10px" }} />
                                        <DashboardContentTitle title={index.studentId} />
                                        <DashboardContentTitle title={index.phoneNumber} />
                                    </S.DashboardContent>
                                    <Link href={`/dashboard/?id=${index.id}`}>
                                        <S.DashboardIntroduceDiv>
                                            <DashboardContentTitle style={{ wordBreak: "break-all", zIndex: "100" }} title={index.introduce} />
                                        </S.DashboardIntroduceDiv>
                                    </Link>
                                </S.DashboardContentWrapper>
                            </>
                        )
                    })}
                    {router.query.id && (
                        students.filter((student) => student.id.toString() === id).map((student) => {
                            return (
                                <>
                                    <Modal student={student} />
                                </>
                            )
                        })
                    )}
                </S.DashboardContainer>
            </div >
        </>
    )
}

export default Main