import { NextPage } from "next";
import * as S from "./styled";
import LogoBig from "src/assets/png/logo-big.png";
import { useForm } from "react-hook-form";
import { Input } from "src/components/Input";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify"
import { Instance } from "src/lib/ga/api";
import { useEffect } from "react";
import FormButton from "src/components/FormButton";

export interface FormProps {
    errors: {
        name: {
            message: string;
        };
        studentId: {
            message: string;
        };
        introduce: {
            message: string;
        };
    };
    name: string;
    studentId: string;
    phoneNumber: string;
    introduce: string;
    id: string;
    password: string;
};

const ApplyPage: NextPage = () => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormProps>();

    const onValid = async (data: FormProps) => {
        const instance = Instance('/api/create')
        try {
            await instance.post('', {
                name: data.name,
                studentId: data.studentId,
                phoneNumber: data.phoneNumber,
                introduce: data.introduce,
            }).then((res) => {
                res.data.ok ? (
                    toast.success(`${res.data.message}`, { position: "bottom-right" }),
                    setValue("name", ""),
                    setValue("studentId", ""),
                    setValue("phoneNumber", ""),
                    setValue("introduce", "")
                ) : (
                    toast.error(`${res.data.message}`, { position: "bottom-right" })
                )
            });
        } catch (err) {
            console.log(err)
            toast.error("Error!", { position: "top-center" });
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue.length === 3 || inputValue.length === 8) {
            setValue("phoneNumber", inputValue + "-");
        }
    }

    return (
        <>
            <S.LogoBigImage src={LogoBig.src} />
            <S.Wrap>
                <S.FormDiv>
                    <S.InfoDiv>
                        <Input register={register} errors={errors} title="이름" name="name" minValue={2} maxValue={4} divStyle={{ marginTop: "0" }} />
                        <Input register={register} errors={errors} example="예) 클라우드보안과 1학년 1반 1번 - C1111" title="학번" name="studentId" minValue={5} maxValue={5} />
                        <Input register={register} errors={errors} title="전화번호" name="phoneNumber" minValue={13} maxValue={13} onChange={onChange} />
                        <Input register={register} errors={errors} title="자기소개" name="introduce" divStyle={{ marginBottom: "0" }} />
                    </S.InfoDiv>
                    <FormButton handleSubmit={handleSubmit} onValid={onValid} title="신청하기" />
                </S.FormDiv>
            </S.Wrap>
            <ToastContainer />
        </>
    )
}

export default ApplyPage;