import * as S from './styled'
import { NextPage } from "next";

const NonePage: NextPage = () => {
    return (
        <S.Wrap className="container">
            <h1>404</h1>
            <S.Line></S.Line>
            <S.Message>존재하지 않는 페이지 입니다.</S.Message>
        </S.Wrap>
    )
}

export default NonePage