import { NextPage } from "next"
import { useEffect, useState } from "react";
import { DashboardContentTitle } from "src/components/DashboardContentTitle";
import { Instance } from "src/lib/ga/api";
import * as S from "./styled"

interface DashboardPageProps {
    name: string,
    studentId: string,
    phoneNumber: string,
    introduce: string;
}

const DashboardPage: NextPage = () => {

    const [student, setStudent] = useState<[DashboardPageProps]>()
    const instance = Instance('/api/get')

    useEffect(() => {
        instance.get('').then((res) => {
            setStudent(res.data)
        });
    }, [])

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
                {student?.map((index: DashboardPageProps, key) => {
                    <>
                        <S.DashboardContent key={key}>
                            <DashboardContentTitle title={index.name} />
                            <DashboardContentTitle style={{ position: "relative", left: "17px" }} title={index.studentId} />
                            <DashboardContentTitle style={{ position: "relative", left: "30px" }} title={index.phoneNumber} />
                            <DashboardContentTitle style={{ width: "48.5%", wordBreak: "break-all" }} title={index.introduce} />
                        </S.DashboardContent>
                    </>
                })}
            </S.DashboardContainer>
        </div>
    )
}

export default DashboardPage;