import React from "react";
import * as S from "./styled"
import { useRouter } from "next/router";
import { Student } from "src/utils/interface";
import { baseUrl } from "src/utils/base-url";
import { Instance } from "src/utils/api";
import { CatchError, Error, Success } from "src/utils/notification";
import Link from "next/link";
import Modal from "../modal";
import { Button } from "src/components";

interface MainProps {
    students: Student[];
}

const Main: React.FC<MainProps> = ({ students }) => {
    const router = useRouter();
    const intro = router.query.intro;
    const folio = router.query.folio;

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const nickName = e.target.parentElement?.children[2].textContent;
        const role = e.target.value;
        const instance = Instance(`${baseUrl}/api/role-update`);
        try {
            instance.post('', {
                nickName,
                role
            }).then((res) => {
                res.data.ok ? (
                    Success(res.data.message)
                ) : (
                    Error(res.data.message)
                )
            })
        } catch (err) {
            console.log(err)
            CatchError("Error!")
        }
    }
    return (
        <>
            <div className="container">
                <S.DashboardContainer>
                    <S.DashboardTitle>지원서 명단</S.DashboardTitle>
                    <S.DashboardContentTitleWrap>
                        <S.DashboardContentTitle>번호</S.DashboardContentTitle>
                        <S.DashboardContentTitle>이름</S.DashboardContentTitle>
                        <S.DashboardContentTitle>아이디</S.DashboardContentTitle>
                        <S.DashboardContentTitle>학번</S.DashboardContentTitle>
                        <S.DashboardContentTitle>전화번호</S.DashboardContentTitle>
                        <S.DashboardContentTitle>자기소개서</S.DashboardContentTitle>
                        <S.DashboardContentTitle>선택 분야</S.DashboardContentTitle>
                        <S.DashboardContentTitle>자기 역량</S.DashboardContentTitle>
                        <S.DashboardContentTitle>권한</S.DashboardContentTitle>
                    </S.DashboardContentTitleWrap>
                    {students.map((index: Student, i: number) => {
                        return (
                            <>
                                <S.DashboardContentItemWrap>
                                    <S.DashboardContentTitle>{index.id.toString()}</S.DashboardContentTitle>
                                    <S.DashboardContentTitle>{index.name}</S.DashboardContentTitle>
                                    <S.DashboardContentTitle>{index.nickName}</S.DashboardContentTitle>
                                    <S.DashboardContentTitle>{index.studentId}</S.DashboardContentTitle>
                                    <S.DashboardContentTitle>{index.phoneNumber || "NULL"}</S.DashboardContentTitle>
                                    <Link href={`/dashboard/?intro=${index.id}`}>
                                        <Button style={{ padding: "6px 10px" }}>
                                            상세보기 &nbsp;{">"}
                                        </Button>
                                    </Link>
                                    <S.DashboardContentTitle style={{ margin: "0 10px" }}>{index.field || "NULL"}</S.DashboardContentTitle>
                                    <Link href={`/dashboard/?folio=${index.id}`}>
                                        <Button style={{ padding: "6px 10px" }}>
                                            상세보기 &nbsp;{">"}
                                        </Button>
                                    </Link>
                                    <S.DashboardContentRole onChange={onChange} style={{ marginLeft: "10px" }}>
                                        <option>{index.role}</option>
                                        <option>{index.role === "ADMIN" ? "STUDENT" : "ADMIN"}</option>
                                    </S.DashboardContentRole>
                                </S.DashboardContentItemWrap>
                            </>
                        )
                    })}
                    {router.query.intro ? (
                        students.filter((student) => student.id.toString() === intro).map((student) => {
                            return (
                                <>
                                    <Modal student={student} query={router.query} />
                                </>
                            )
                        })
                    ) : router.query.folio && (
                        students.filter((student) => student.id.toString() === folio).map((student) => {
                            return (
                                <>
                                    <Modal student={student} query={router.query} />
                                </>
                            )
                        }))}
                </S.DashboardContainer>
            </div >
        </>
    )
}

export default Main