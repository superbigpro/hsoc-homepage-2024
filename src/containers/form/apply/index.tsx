import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import LogoBig from "src/assets/png/logo-big.png";
import { toast, ToastContainer } from "react-toastify";
import { Input } from "src/components/Input";
import * as S from "../styled"
import FormButton from "src/components/SubmitButton";
import { FormProps } from "src/lib/ga/form-props";
import Link from "next/link";
import { useEffect } from "react";
import Router from "next/router";
import { Success, Error } from "src/lib/ga/notification";
import { NextPage } from "next";

const ApplyPage: NextPage = () => {
    const { status } = useSession();

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormProps>();

    const onValid = async (formData: FormProps) => {
        await signIn("credentials", {
            id: formData.nickName,
            password: formData.password,
            redirect: false,
        }).then((res) => {
            res?.ok ? (
                Success('로그인에 성공하셨습니다'),
                Router.replace("/")
            ) : (
                Error('로그인에 실패하셨습니다'),
                setValue("nickName", ""),
                setValue("password", "")
            )
        })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue.length === 3 || inputValue.length === 8) {
            setValue("phoneNumber", inputValue + "-");
        }
    }

    if (status === "authenticated") {
        return (
            <>
                <S.LogoBigImage src={LogoBig.src} />
                <S.ApplyWrap>
                    <S.FormDiv>
                        <S.InfoDiv>
                            <Input register={register} errors={errors} title="전화번호" name="phoneNumber" minValue={13} maxValue={13} onChange={onChange} />
                            <Input register={register} errors={errors} title="자기소개" name="introduce" divStyle={{ marginBottom: "0" }} />
                        </S.InfoDiv>
                        <FormButton handleSubmit={handleSubmit} onValid={onValid} title="지원하기" />
                    </S.FormDiv>
                </S.ApplyWrap>
                <ToastContainer />
            </>
        )
    } else {
        return (
            <>
                <h1>로그인이 안되어 있습니다.</h1>
            </>
        )
    }
}

export default ApplyPage;