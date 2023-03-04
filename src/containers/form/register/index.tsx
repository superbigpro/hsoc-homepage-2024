import { NextPage } from "next";
import * as S from "../styled";
import LogoBig from "src/assets/png/logo-big.png";
import { useForm } from "react-hook-form";
import { Input } from "src/components/Input/input";
import { Instance } from "src/utils/api";
import FormButton from "src/components/FormButton";
import { FormProps } from "../../../utils/interface";
import Link from "next/link";
import { Success, Error, CatchError } from "src/utils/notification";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { ValueInput } from "src/components/Input/input-value";

const RegisterPage: NextPage = () => {
    const { status } = useSession();

    const { register, handleSubmit, formState: { errors }, setError } = useForm<FormProps>();

    const onValid = async (data: FormProps) => {
        if (data.password !== data.passwordCheck) {
            setError(
                'passwordCheck', // 에러 핸들링할 input요소 name
                { message: '비밀번호가 일치하지 않습니다.' }, // 에러 메세지
                { shouldFocus: true }, // 에러가 발생한 input으로 focus 이동
            );
        } else {
            const instance = Instance(`/api/create`)
            try {
                await instance.post('', {
                    nickName: data.nickName,
                    name: data.name,
                    studentId: data.studentId,
                    password: data.password,
                }).then((res) => {
                    res.data.ok ? (
                        Router.replace("/login")
                    ) : (
                        Error(res.data.message)
                    )
                });
            } catch (err) {
                console.log(err)
                CatchError("Error!")
            }
        }

    };

    useEffect(() => {
        if (status === "authenticated") {
            Router.replace("/")
        }
    }, [status])

    return (
        <>
            <S.LogoBigImage src={LogoBig.src} />
            <S.RegisterWrap>
                <S.FormDiv>
                    <S.InfoDiv>
                        <Input register={register} errors={errors} title="아이디" name="nickName" divStyle={{ marginTop: "0" }} />
                        <ValueInput register={register} errors={errors} title="이름" name="name" minValue={2} maxValue={5} />
                        <ValueInput register={register} errors={errors} title="학번" example="예) 클라우드보안과 1학년 1반 1번 - C1111" name="studentId" minValue={5} maxValue={5} />
                        <Input register={register} errors={errors} title="비밀번호" name="password" type="password" example="비밀번호는 영문, 숫자를 포함한 8자 이상이어야 합니다." />
                        <Input register={register} errors={errors} title="비밀번호 확인" name="passwordCheck" type="password" />
                    </S.InfoDiv>
                    <FormButton handleSubmit={handleSubmit} onValid={onValid} title="회원가입" />
                    <S.LinkButton >이미 계정이 있으신가요?
                        <Link href="/login">로그인</Link>
                    </S.LinkButton>
                </S.FormDiv>
            </S.RegisterWrap>
        </>
    )
}

export default RegisterPage;