import { HTMLInputTypeAttribute } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { nameNumberPattern, phoneNumberPattern, studentNumberPattern } from "src/utils/constant";
import { FormProps } from "src/utils/interface";
import * as S from "./styled"

interface InputProps {
    register: UseFormRegister<FormProps>;
    errors: FieldErrors<FormProps>;
    title: string;
    name: keyof FormProps;
    example?: string;
    minValue: number;
    maxValue: number;
    divStyle?: React.CSSProperties;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: HTMLInputTypeAttribute;
}

export const ValueInput: React.FC<InputProps> = ({ register, errors, title, example, name, minValue, maxValue, divStyle, onChange, type }) => {

    const check = `${title === "이름" || title === "학번" || title === "자기 역량" ? `은` : `는`}`

    const otherCheck = `${title === "이름" || title === "학번" || title === "자기 역량" ? `을` : `를`}`

    return (
        <>
            <S.InputDiv style={divStyle}>
                <S.Title>{title === "자기 역량" ? `${title} (선택사항)` : title}</S.Title>
                <S.Example>{example}</S.Example>
                <div>
                    {title === "자기소개" ? (
                        <S.IntroduceInput {...register(`${name}`, {
                            required: `${title}${check} 필수 입니다.`,
                            maxLength: {
                                value: maxValue,
                                message: `${title}${check} ${maxValue}자 이하이여야 합니다.`
                            }
                        })} placeholder={`${title}${otherCheck} 입력해주세요...`} />
                    ) : title === "자기 역량" ? (
                        <S.portfolioInput{...register(`${name}`, {
                            maxLength: {
                                value: maxValue,
                                message: `${title}${check} ${maxValue}자 이하이여야 합니다.`
                            }
                        })} placeholder={`${title}${otherCheck} 입력해주세요...`} />
                    ) : (
                        <S.Input {...register(`${name}`, {
                            required: `${title}${check} 필수 입니다.`,
                            minLength: {
                                value: minValue,
                                message: `${title}${check} ${minValue}자 이상이여야 합니다.`
                            },
                            maxLength: {
                                value: maxValue,
                                message: `${title}${check} ${maxValue}자 이하이여야 합니다.`
                            },
                            pattern: title === "전화번호" ? {
                                value: phoneNumberPattern,
                                message: "전화번호 형식이 올바르지 않습니다."
                            } : title === "이름" ? {
                                value: nameNumberPattern,
                                message: "이름 형식이 올바르지 않습니다."
                            } : {
                                value: studentNumberPattern,
                                message: "학번 형식이 올바르지 않습니다."
                            }
                        })} type={type} onChange={onChange} placeholder={`${title}${otherCheck} 입력해주세요...`} />
                    )}
                </div>
                <S.Message>{errors[name]?.message}</S.Message>
            </S.InputDiv>
        </>
    )
}

