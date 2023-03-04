import { useForm } from "react-hook-form";
import LogoBig from "src/assets/png/logo-big.png";
import { Input } from "src/components/Input/input";
import * as S from "../styled"
import FormButton from "src/components/FormButton";
import { FormProps } from "src/utils/interface";
import { Success, Error, CatchError } from "src/utils/notification";
import { NextPage } from "next";
import RightArrowSVG from "src/assets/svg/right-arrow.svg";
import { Instance } from "src/utils/api";
import { useEffect, useState } from "react";
import Router from "next/router";
import { ValueInput } from "src/components/Input/input-value";
import { useSession } from "next-auth/react";

const ApplyPage: NextPage = () => {
    const { data, status } = useSession();
    const nickName = data?.user?.name;

    const [info, setInfo] = useState(false)

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormProps>();

    const onValid = async (data: FormProps) => {
        const instance = Instance(`/api/update`)
        try {
            await instance.post('').then((res) => {
                res.data.ok ? (
                    Success(res.data.message),
                    setValue("phoneNumber", ""),
                    setValue("introduce", ""),
                    setValue("portfolio", "")
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
        if (inputValue.length === 10) {
            setValue("phoneNumber", inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
        }
        if (inputValue.length === 13) {
            setValue("phoneNumber", inputValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
    }

    const getMyInfo = async () => {
        const instance = Instance(`/api/user`)
        try {
            await instance.post('').then((res) => {
                res.data.ok ? (
                    setValue("phoneNumber", res.data.student.phoneNumber),
                    setValue("introduce", res.data.student.introduce),
                    setValue("field", res.data.student.field),
                    setValue("portfolio", res.data.student.portfolio),
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

    useEffect(() => {
        if (status === "unauthenticated") {
            Router.replace("/login?redirect=/apply")
        }
    }, [status, info]);

    return (
        <>
            {status === "authenticated" && (
                <>
                    <S.LogoBigImage src={LogoBig.src} />
                    <S.ApplyWrap>
                        <S.FormDiv>
                            <S.GetMyInfoMessage onClick={getMyInfo}>
                                내 정보 불러오기
                                <RightArrowSVG style={{ marginBottom: "4px" }} />
                            </S.GetMyInfoMessage>
                            <S.InfoDiv>
                                <ValueInput register={register} errors={errors} title="전화번호" name="phoneNumber" minValue={13} maxValue={13} onChange={onChange} divStyle={{ marginTop: "10px" }} />
                                <ValueInput register={register} errors={errors} title="자기소개" name="introduce" minValue={1} maxValue={3000} />
                                <ValueInput register={register} errors={errors} title="자기 역량" name="portfolio" minValue={1} maxValue={3000} example="다룰 줄 아는 프로그래밍 언어나 진행해본 프로젝트 같은 것이 있다면 자유롭게 적어주세요." />
                                <Input register={register} errors={errors} title="배우고싶은 분야" name="field" />
                            </S.InfoDiv>
                            <FormButton handleSubmit={handleSubmit} onValid={onValid} title={info ? "수정하기" : "지원하기"} />
                        </S.FormDiv>
                    </S.ApplyWrap>
                </>
            )}
        </>
    )
}

export default ApplyPage;