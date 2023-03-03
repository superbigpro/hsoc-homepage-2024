import { HTMLInputTypeAttribute } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { FormProps } from "src/utils/interface";
import * as S from "./styled"

interface InputProps {
    register: UseFormRegister<FormProps>;
    errors: FieldErrors<FormProps>;
    title: string;
    name: keyof FormProps;
    example?: string;
    minValue?: number;
    maxValue?: number;
    divStyle?: React.CSSProperties;
    type?: HTMLInputTypeAttribute;
}

export const Input: React.FC<InputProps> = ({ register, errors, title, example, name, divStyle, type }) => {

    const check = `${title === "아이디" || title === "비밀번호" ? `는` : `은`}`

    return (
        <>
            <S.InputDiv style={divStyle}>
                <S.Title>{title}</S.Title>
                <S.Example>{example}</S.Example>
                <div>
                    {title !== "비밀번호" ? (
                        <S.Input {...register(`${name}`, {
                            required: `${title}${check} 필수 입니다.`,
                        })} type={type} placeholder={`${title}${check} 입력해주세요...`} />
                    ) : (
                        <S.Input {...register(`${name}`, {
                            required: `${title}${check} 필수 입니다.`,
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message: "비밀번호는 영문, 숫자를 포함한 8자 이상이어야 합니다."
                            }
                        })} type={type} placeholder={`${title}${check} 입력해주세요...`} />
                    )}
                </div>
                <S.Message>{errors[name]?.message}</S.Message>
            </S.InputDiv>
        </>
    )
}

