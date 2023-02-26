import * as S from './styled'
import { NextPage } from "next";

const NonePage: NextPage = () => {
    return (
        <S.Wrap className="container">
            <h1>404</h1>
            <S.Line></S.Line>
            <S.Message>This page could not be found.</S.Message>
        </S.Wrap>
    )
}

export default NonePage