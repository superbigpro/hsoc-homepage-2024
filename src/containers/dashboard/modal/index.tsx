import { NextPage } from "next";
import * as S from "./styled";
import { useRouter } from "next/router";
import { Student } from "..";
import Link from "next/link";
import { student } from "@prisma/client";

interface ModalProps {
    student: Student
}

const Modal: React.FC<ModalProps> = ({ student }) => {
    const router = useRouter();
    const onClick = () => {
        router.push('/dashboard')
    }
    const onBoxClick = (id: student) => {
        router.push(`/dashboard/?id=${id}`)
    }
    return (
        <>
            <Link href={`/dashboard`}>
                <S.Wrap>
                    <S.ModalDiv >
                        <S.IntroduceDiv>
                            <S.IntroduceContent>{student.introduce}</S.IntroduceContent>
                        </S.IntroduceDiv>
                    </S.ModalDiv>
                </S.Wrap>
            </Link>
        </>
    )
}

export default Modal