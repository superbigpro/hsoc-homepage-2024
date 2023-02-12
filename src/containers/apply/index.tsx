import { NextPage } from "next";
import * as S from "./styled";
import LogoBig from "src/assets/png/logo-big.png";
import { useForm } from "react-hook-form";
import { Input } from "src/components/Input";

export interface IForm {
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
};

const ApplyPage: NextPage = () => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<IForm>();

    const onValid = () => {
        setValue("name", "");
        setValue("studentId", "");
        setValue("introduce", "");
    };

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = e.target.value;
        if (inputValue.length === 10) {
            setValue("phoneNumber", inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
        }
        if (inputValue.length === 13) {
            setValue("phoneNumber", inputValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
    }

    return (
        <>
            <S.LogoBigImage src={LogoBig.src} />
            <S.Wrap>
                <S.FormDiv onSubmit={handleSubmit(onValid)}>
                    <Input register={register} errors={errors} title="이름" name="name" minValue={2} maxValue={4} />
                    <Input register={register} errors={errors} example="예) 클라우드보안과 1학년 1반 1번 - C1111" title="학번" name="studentId" minValue={5} maxValue={5} />
                    <Input register={register} errors={errors} title="전화번호" name="phoneNumber" minValue={13} maxValue={13} onChange={onChange} />
                    <Input register={register} errors={errors} title="자기소개" name="introduce" minValue={5} divStyle={{ marginBottom: "0" }} inputStyle={{ height: "130px" }} />
                    <S.Button>제출하기</S.Button>
                </S.FormDiv>
            </S.Wrap>
        </>
    )
}

export default ApplyPage;