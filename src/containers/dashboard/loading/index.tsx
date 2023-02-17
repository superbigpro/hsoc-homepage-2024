import * as S from "./styled"

const Loading: React.FC = () => {
    return (
        <>
            <div className="container">
                <S.DashboardContainer>
                    <S.DashboardTitle >Loading...</S.DashboardTitle>
                </S.DashboardContainer>
            </div >
        </>
    )
}

export default Loading;