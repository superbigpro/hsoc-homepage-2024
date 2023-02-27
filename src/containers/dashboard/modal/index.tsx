import * as S from "./styled";
import { useRouter } from "next/router";
import Link from "next/link";
import { student } from "@prisma/client";
import { Student } from "src/lib/ga/interface";

interface ModalProps {
    student: Student;
}

const Modal: React.FC<ModalProps> = ({ student }) => {
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