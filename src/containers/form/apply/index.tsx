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
import { Instance } from "src/lib/ga/api";

const ApplyPage: NextPage = () => {
    const { data, status } = useSession();
    const studentId = data?.user?.name;
    console.log(data?.user?.email)

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormProps>();

    const onValid = async (data: FormProps) => {
        const instance = Instance('/api/update')
        try {
            await instance.post('', {
                studentId: studentId,
                phoneNumber: data.phoneNumber,
                introduce: data.introduce,
            }).then((res) => {
                res.data.ok ? (
                    Success(res.data.message),
                    setValue("studentId", ""),
                    setValue("phoneNumber", ""),
                    setValue("introduce", "")
                ) : (
                    Error(res.data.message)
                )
            });
        } catch (err) {
            console.log(err)
            Error("Error!")
        }
    };


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue.length === 3 || inputValue.length === 8) {
            setValue("phoneNumber", inputValue + "-");
        }
    }

    // useEffect(() => {
    //     if (status !== "authenticated") {
    //         Router.replace("/login/?redirect=/form/apply");
    //     }
    // }, [])

    return (
        <>
            <S.LogoBigImage src={LogoBig.src} />
            <S.ApplyWrap>
                <S.FormDiv>
                    <S.InfoDiv>
                        {/* <Input register={register} errors={errors} title="학번" name="studentId" minValue={5} maxValue={5} divStyle={{ marginTop: "0" }} /> */}
                        <Input register={register} errors={errors} title="전화번호" name="phoneNumber" minValue={13} maxValue={13} onChange={onChange} divStyle={{ marginTop: "0" }} value="asdfsadf" />
                        <Input register={register} errors={errors} title="자기소개" name="introduce" value="asdfsadf" />
                    </S.InfoDiv>
                    <FormButton handleSubmit={handleSubmit} onValid={onValid} title="지원하기" />
                </S.FormDiv>
            </S.ApplyWrap>
            <ToastContainer />
        </>
    )
}

export default ApplyPage;