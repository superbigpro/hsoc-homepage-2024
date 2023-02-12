import { FieldErrors, useForm, UseFormRegister } from "react-hook-form"
import { IForm } from "src/containers/apply"
import * as S from "./styled"

interface InputProps {
    register: UseFormRegister<IForm>;
    errors: any;
    title: string;
    name: keyof IForm;
    example?: string;
    minValue: number;
    maxValue?: number;
    divStyle?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Input: React.FC<InputProps> = ({register, errors, title, example, name, minValue, maxValue, divStyle, inputStyle, onChange }) => {

    return (
        <>
            <S.InputDiv style={divStyle}>
                <S.Title>{title}</S.Title>
                <S.Example>{example}</S.Example>
                <div>
                    <S.Input {...register(`${name}`, {
                        required: `${title}${title !== "자기소개" ? "은" : "는"} 필수 입니다.`,
                        minLength: {
                            value: minValue,
                            message: `${title}${title !== "자기소개" ? "은" : "는"} ${minValue}자 이상이여야 합니다.`
                        },
                        maxLength: {
                            value: maxValue,
                            message: `${title}${title !== "자기소개" ? "은" : "는"} ${maxValue}자 이하이여야 합니다.`
                        }
                    })} style={inputStyle} onChange={onChange}/>
                </div>
                <S.Message>{errors[name]?.message}</S.Message>
            </S.InputDiv>
        </>
    )
}

