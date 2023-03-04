import { HTMLInputTypeAttribute } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { FormProps } from "src/utils/interface";
import { FaAngleDown } from "react-icons/fa";
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
    const otherCheck = `${title === "아이디" || title === "비밀번호" ? `를` : `을`}`

    return (
        <>
            <S.InputDiv style={divStyle}>
                <S.Title>{title}</S.Title>
                <S.Example>{example}</S.Example>
                <div>
                    {title === "비밀번호" ? (
                        <S.Input {...register(`${name}`, {
                            required: `${title}${check} 필수 입니다.`,
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message: "비밀번호는 영문, 숫자를 포함한 8자 이상이어야 합니다."
                            }
                        })} type={type} placeholder={`${title}${otherCheck} 입력해주세요...`} />
                    ) : title === "배우고싶은 분야" ? (
                        <>
                            <S.FieldSelect {...register(`${name}`, {
                                required: `${title}${check} 필수 입니다.`,
                            })}>
                                <option>미정</option>
                                <option>웹</option>
                                <option>포렌식</option>
                                <option>네트워크</option>
                                <option>암호학</option>
                                <option>시스템</option>
                            </S.FieldSelect>
                        </>
                    ) : (
                        <S.Input {...register(`${name}`, {
                            required: `${title}${check} 필수 입니다.`,
                        })} type={type} placeholder={`${title}${otherCheck} 입력해주세요...`} />
                    )}
                </div>
                <S.Message>{errors[name]?.message}</S.Message>
            </S.InputDiv>
        </>
    )
}

