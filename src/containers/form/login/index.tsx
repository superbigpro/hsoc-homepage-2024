import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import LogoBig from "src/assets/png/logo-big.png";
import { Input } from "src/components/Input/input";
import * as S from "../styled"
import FormButton from "src/components/FormButton";
import { FormProps } from "src/lib/interface";
import Link from "next/link";
import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import { Error, Info } from "src/lib/notification";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
    const { status } = useSession();
    const router = useRouter();

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
        if (router.query.redirect) {
            Info("지원하려면, 먼저 로그인을 하셔야 합니다.")
        }
        console.log(router.query.redirect)
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
        </>
    )
}

export default LoginPage;