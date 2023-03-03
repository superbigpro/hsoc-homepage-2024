
import { HTMLInputTypeAttribute } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { FormProps } from "src/lib/interface";
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
    value?: string;
}

export const ValueInput: React.FC<InputProps> = ({ register, errors, title, example, name, minValue, maxValue, divStyle, onChange, type, value }) => {


    const phoneNumberPattern = /^01([0|1|6|7|8|9]?)-?[0-9]{3,4}-?[0-9]{4}$/;

    return (
        <>
            <S.InputDiv style={divStyle}>
                <S.Title>{title}</S.Title>
                <S.Example>{example}</S.Example>
                <div>
                    {title !== "자기소개" ? (<S.Input {...register(`${name}`, {
                        required: `${title}은 필수 입니다.`,
                        minLength: {
                            value: minValue,
                            message: `${title}은 ${minValue}자 이상이여야 합니다.`
                        },
                        maxLength: {
                            value: maxValue,
                            message: `${title}은 ${maxValue}자 이하이여야 합니다.`
                        },
                        pattern: title === "전화번호" ? {
                            value: phoneNumberPattern,
                            message: "전화번호 형식이 올바르지 않습니다."
                        } : title === "이름" ? {
                            value: /^[가-힣]{2,4}$/,
                            message: "이름 형식이 올바르지 않습니다."
                        } : {
                            value: /^[CN][0-9]{4}$/,
                            message: "학번 형식이 올바르지 않습니다."
                        }
                    })} type={type} onChange={onChange} placeholder={`${title}은 입력해주세요...`} value={value} />
                    ) : (
                        <S.IntroduceInput {...register(`${name}`, {
                            required: `${title}는 필수 입니다.`,
                            maxLength: {
                                value: maxValue,
                                message: `${title}은 ${maxValue}자 이하이여야 합니다.`
                            }
                        })} placeholder={`${title}를 입력해주세요...`} value={value} />
                    )}
                </div>
                <S.Message>{errors[name]?.message}</S.Message>
            </S.InputDiv>
        </>
    )
}

