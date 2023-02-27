import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import * as S from "./styled"
import { useRouter } from "next/router";
import { Student } from "src/lib/ga/interface";
import { baseUrl } from "src/lib/ga/base-url";
import { Instance } from "src/lib/ga/api";
import { CatchError, Error, Success } from "src/lib/ga/notification";
import { ToastContainer } from "react-toastify";

interface MainProps {
    students: Student[];
}

const Main: React.FC<MainProps> = ({ students }) => {
    const router = useRouter();
    const id = router.query.id

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const studentId = e.target.parentElement?.children[3].textContent;
        const role = e.target.value;
        console.log(role);
        const instance = Instance(`${baseUrl}/api/role-update`);
        try {
            instance.post('', {
                studentId,
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
                                    <S.DashboardContentTitle style={{ marginRight: "20px" }}>{index.introduce || "NULL"}</S.DashboardContentTitle>
                                    <S.DashboardContentRole onChange={onChange}>
                                        <option>{index.role}</option>
                                        <option>{index.role === "ADMIN" ? "STUDENT" : "ADMIN"}</option>
                                    </S.DashboardContentRole>
                                </S.DashboardContentItemWrap>
                            </>
                        )
                    })}
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
            <ToastContainer />
        </>
    )
}

export default Main