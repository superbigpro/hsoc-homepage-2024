import * as S from './styled'

interface DashboardContentTitleProps {
    title: string;
    style?: React.CSSProperties;
}

export const DashboardContentTitle: React.FC<DashboardContentTitleProps> = ({ title, style }) => {
    return (
        <>
            <S.DashboardContentTitle style={style}>
                {title}
            </S.DashboardContentTitle>
        </>
    )
}