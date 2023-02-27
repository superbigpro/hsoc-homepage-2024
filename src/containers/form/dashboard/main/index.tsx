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
                    <S.DashboardContentTitleWrap>
                        <S.DashboardContentTitle>번호</S.DashboardContentTitle>
                        <S.DashboardContentTitle>아이디</S.DashboardContentTitle>
                        <S.DashboardContentTitle>비밀번호</S.DashboardContentTitle>
                    </S.DashboardContentTitleWrap>
                    {/* {router.query.id && (
                        students.filter((student) => student.id.toString() === id).map((student) => {
                            return (
                                <>
                                    <Modal student={student} />
                                </>
                            )
                        })
                    )} */}
                </S.DashboardContainer>
            </div >
        </>
    )
}

export default Main