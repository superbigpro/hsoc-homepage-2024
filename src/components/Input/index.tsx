import { HTMLInputTypeAttribute } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { FormProps } from "src/lib/ga/interface";
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
    value?: string;
}

export const Input: React.FC<InputProps> = ({ register, errors, title, example, name, minValue, maxValue, divStyle, onChange, type, value }) => {

    const check = `${title === "전화번호" || title === "아이디" || title === "비밀번호" ? `는` : `은`}`
    return (
        <>
            <S.InputDiv style={divStyle}>
                <S.Title>{title}</S.Title>
                <S.Example>{example}</S.Example>
                <div>
                    {title !== "자기소개" ? (
                        <S.Input {...register(`${name}`, {
                            required: `${title}${check} 필수 입니다.`,
                            minLength: {
                                value: minValue,
                                message: `${title}${check} ${minValue}자 이상이여야 합니다.`
                            },
                            maxLength: {
                                value: maxValue,
                                message: `${title}${check} ${maxValue}자 이하이여야 합니다.`
                            }
                        })} type={type} onChange={onChange} placeholder={`${title}${check} 입력해주세요...`} value={value} />
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
                        })} placeholder={`${title}를 입력해주세요...`} value={value} />
                    )}
                </div>
                <S.Message>{errors[name]?.message}</S.Message>
            </S.InputDiv>
        </>
    )
}

