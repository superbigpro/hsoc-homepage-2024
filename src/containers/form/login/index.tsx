import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import LogoBig from "src/assets/png/logo-big.png";
import { toast, ToastContainer } from "react-toastify";
import { Input } from "src/components/Input";
import * as S from "../styled"
import FormButton from "src/components/SubmitButton";
import { FormProps } from "src/lib/ga/interface";
import Link from "next/link";
import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import { Success, Error } from "src/lib/ga/notification";
import { NextPage } from "next";

const LoginPage: NextPage = () => {

    const router = useRouter();
    const redirect = router.query.redirect;

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
        if (redirect) {
            toast.info("지원하려면, 먼저 로그인 해야 합니다", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        if (status === "authenticated") {
            Router.replace("/")
        }
        console.log(redirect)
    }, [
        // call once when component is mounted
    ])

    return (
        <>
            <S.LogoBigImage src={LogoBig.src} />
            <S.Wrap>
                {/* {redirect && (
                    <S.RedirectBox>
                        <S.RedirectMessage>
                            지원하려면, 먼저 로그인 해야 합니다
                        </S.RedirectMessage>
                    </S.RedirectBox>
                )} */}
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
            {/*  call ToastContainer one time */}
            <ToastContainer limit={1} />
        </>
    )
}

export default LoginPage;