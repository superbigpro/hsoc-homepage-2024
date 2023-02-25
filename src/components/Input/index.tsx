import { HTMLInputTypeAttribute } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { FormProps } from "src/lib/ga/form-props";
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
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: HTMLInputTypeAttribute;
}

export const Input: React.FC<InputProps> = ({ register, errors, title, example, name, minValue, maxValue, divStyle, onChange, type }) => {

    return (
        <>
            <S.InputDiv style={divStyle}>
                <S.Title>{title}</S.Title>
                <S.Example>{example}</S.Example>
                <div>
                    {title !== "자기소개" ? (
                        <S.Input {...register(`${name}`, {
                            required: `${title}은 필수 입니다.`,
                            minLength: {
                                value: minValue,
                                message: `${title}은 ${minValue}자 이상이여야 합니다.`
                            },
                            maxLength: {
                                value: maxValue,
                                message: `${title}은 ${maxValue}자 이하이여야 합니다.`
                            }
                        })} type={type} onChange={onChange} placeholder={`${title}${title === "전화번호" ? `를` : `을`} 입력해주세요...`} />
                    ) : (
                        <S.IntroduceInput {...register(`${name}`, {
                            required: `${title}는 필수 입니다.`,
                            minLength: {
                                value: minValue,
                                message: `${title}는 ${minValue}자 이상이여야 합니다.`
                            },
                            maxLength: {
                                value: maxValue,
                                message: `${title}는 ${maxValue}자 이하이여야 합니다.`
                            }
                        })} placeholder={`${title}를 입력해주세요..`} />
                    )}
                </div>
                <S.Message>{errors[name]?.message}</S.Message>
            </S.InputDiv>
        </>
    )
}

