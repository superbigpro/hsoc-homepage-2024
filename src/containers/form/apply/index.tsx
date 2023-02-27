import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import LogoBig from "src/assets/png/logo-big.png";
import { ToastContainer } from "react-toastify";
import { Input } from "src/components/Input";
import * as S from "../styled"
import FormButton from "src/components/SubmitButton";
import { FormProps } from "src/lib/ga/interface";
import Link from "next/link";
import { Success, Error, CatchError } from "src/lib/ga/notification";
import { NextPage } from "next";
import RightArrowSVG from "src/assets/svg/right-arrow.svg";
import { Instance } from "src/lib/ga/api";
import { baseUrl } from "src/lib/ga/base-url";
import { useState } from "react";

const ApplyPage: NextPage = () => {
    const { data, status } = useSession();
    const studentId = data?.user?.name;

    const [info, setInfo] = useState(false)

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormProps>();

    const onValid = async (data: FormProps) => {
        const instance = Instance(`${baseUrl}/api/update`)
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
            CatchError("Error!")
        }
    };


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue.length === 3 || inputValue.length === 8) {
            setValue("phoneNumber", inputValue + "-");
        }
    }

    const getMyInfo = async () => {
        const instance = Instance(`${baseUrl}/api/user`)
        try {
            await instance.post('', {
                studentId: studentId,
            }).then((res) => {
                console.log(res)
                res.data.ok ? (
                    setValue("phoneNumber", res.data.student.phoneNumber),
                    setValue("introduce", res.data.student.introduce),
                    setInfo(true)
                ) : (
                    Error(res.data.message)
                )
            });
        } catch (err) {
            console.log(err)
            CatchError("Error!")
        }
    }

    return (
        <>
            {status === "authenticated" ? (
                <>
                    <S.LogoBigImage src={LogoBig.src} />
                    <S.ApplyWrap>
                        <S.FormDiv>
                            <S.GetMyInfoMessage onClick={getMyInfo}>
                                내 정보 불러오기
                                <RightArrowSVG style={{ marginBottom: "4px" }} />
                            </S.GetMyInfoMessage>
                            <S.InfoDiv>
                                <Input register={register} errors={errors} title="전화번호" name="phoneNumber" minValue={13} maxValue={13} onChange={onChange} divStyle={{ marginTop: "10px" }} />
                                <Input register={register} errors={errors} title="자기소개" name="introduce" />
                            </S.InfoDiv>
                            <FormButton handleSubmit={handleSubmit} onValid={onValid} title={info ? "수정하기" : "지원하기"} />
                        </S.FormDiv>
                    </S.ApplyWrap>
                    <ToastContainer />
                </>
            ) : (
                <>
                    <S.ErrorWrap className="container">
                        <h1>401</h1>
                        <S.Line></S.Line>
                        <S.Message>지원하려면, 먼저
                            <Link href="/login">
                                로그인
                            </Link>
                            해야 합니다.
                        </S.Message>
                    </S.ErrorWrap>
                </>

            )}
        </>
    )
}

export default ApplyPage;