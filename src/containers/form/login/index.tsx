import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import LogoBig from "src/assets/png/logo-big.png";
import { ToastContainer } from "react-toastify";
import { Input } from "src/components/Input";
import * as S from "../styled"
import FormButton from "src/components/SubmitButton";
import { FormProps } from "src/lib/ga/interface";
import Link from "next/link";
import { useEffect } from "react";
import Router from "next/router";
import { Error } from "src/lib/ga/notification";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
    const { status } = useSession();

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormProps>();

    const onValid = async (formData: FormProps) => {
        await signIn("credentials", {
            id: formData.nickName,
            password: formData.password,
            redirect: false,
        }).then((res) => {
            res?.ok ? (
                Router.replace("/")
            ) : (
                Error('로그인에 실패하셨습니다'),
                setValue("nickName", ""),
                setValue("password", "")
            )
        })
    }

    useEffect(() => {
        if (status === "authenticated") {
            Router.replace("/")
        }
    }, [])

    return (
        <>
            <S.LogoBigImage src={LogoBig.src} />
            <S.Wrap>
                <S.FormDiv>
                    <S.InfoDiv>
                        <Input register={register} errors={errors} title="아이디" name="nickName" divStyle={{ marginTop: "0" }} />
                        <Input register={register} errors={errors} title="비밀번호" name="password" type={"password"} />
                    </S.InfoDiv>
                    <FormButton handleSubmit={handleSubmit} onValid={onValid} title="로그인" />
                    <S.LinkButton >아직 계정이 없으신가요?
                        <Link href="/register">회원가입</Link>
                    </S.LinkButton >
                </S.FormDiv>
            </S.Wrap>
            <ToastContainer />
        </>
    )
}

export default LoginPage;