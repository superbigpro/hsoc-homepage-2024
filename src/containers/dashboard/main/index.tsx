import React from "react";
import { signOut } from "next-auth/react";
import { DashboardContentTitle } from "src/components/DashboardContentTitle";
import { Student } from "..";
import * as S from "./styled"
import { useRouter } from "next/router";
import Modal from "../modal";
import Link from "next/link";

interface MainProps {
    students: Student[];
}

const Main: React.FC<MainProps> = ({ students }) => {
    const router = useRouter();
    const id = router.query.id
    console.log(router.query)
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
                            <DashboardContentTitle title="아이디" />
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
                                        <DashboardContentTitle title={index.id.toString()} />
                                        <DashboardContentTitle title={index.name} />
                                        <DashboardContentTitle style={{ position: "relative", left: "17px" }} title={index.studentId} />
                                        <DashboardContentTitle style={{ position: "relative", left: "30px" }} title={index.phoneNumber} />
                                        <Link href={`/dashboard/?id=${index.id}`}>
                                            <S.DashboardIntroduceDiv>
                                                <DashboardContentTitle style={{ wordBreak: "break-all", zIndex: "100" }} title={index.introduce} />
                                            </S.DashboardIntroduceDiv>
                                        </Link>
                                    </S.DashboardContent>
                                </React.Fragment>
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