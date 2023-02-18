import * as S from './styled';

interface FormButtonProps {
    title: string;
}

const FormButton: React.FC<FormButtonProps> = ({title}) => {
    return (
        <>
            <S.ButtonDiv>
                <S.ButtonUi variant="contained">{title}</S.ButtonUi>
            </S.ButtonDiv>
        </>
    )
}

export default FormButton;