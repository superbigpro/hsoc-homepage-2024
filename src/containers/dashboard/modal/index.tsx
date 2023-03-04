import * as S from "./styled";
import Link from "next/link";
import { Student } from "src/utils/interface";
import { NextRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

interface ModalProps {
    student: Student;
    query: ParsedUrlQuery;
}

const Modal: React.FC<ModalProps> = ({ student, query }) => {
    return (
        <>
            <Link href={`/dashboard`}>
                <S.Wrap>
                    <S.ModalDiv >
                        <S.IntroduceDiv>
                            {query.folio ? (
                                <>
                                    <S.IntroduceContent>{student.portfolio || "NULL"}</S.IntroduceContent>
                                </>
                            ) : (
                                <>
                                    <S.IntroduceContent>{student.introduce || "NULL"}</S.IntroduceContent>
                                </>
                            )}
                        </S.IntroduceDiv>
                    </S.ModalDiv>
                </S.Wrap>
            </Link>
        </>
    )
}

export default Modal