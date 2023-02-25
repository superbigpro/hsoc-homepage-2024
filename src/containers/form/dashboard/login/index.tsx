import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import { Input } from "src/components/Input";
import * as S from "../../styled";
import FormButton from "src/components/SubmitButton";
import { FormProps } from "src/lib/ga/form-props";

const Login: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormProps>();

    const onValid = async (formData: FormProps) => {
        await signIn("credentials", {
            id: formData.dashboardId,
            password: formData.dashboardPassword,
            redirect: false,
        }).then((res) => {
            res?.ok ? (
                toast.success('로그인에 성공하셨습니다.', { position: "bottom-right" })
            ) : (
                toast.error('로그인에 실패하셨습니다.', { position: "bottom-right" }),
                setValue("dashboardId", ""),
                setValue("dashboardPassword", "")
            )
        })
    }
    return (
        <>
            <S.Wrap>
                <S.FormDiv>
                    <S.InfoDiv>
                        <Input register={register} errors={errors} title="아이디" name="dashboardId" divStyle={{ marginTop: "0" }} />
                        <Input register={register} errors={errors} title="비밀번호" name="dashboardPassword" type={"password"} />
                    </S.InfoDiv>
                    <FormButton handleSubmit={handleSubmit} onValid={onValid} title="로그인" />
                </S.FormDiv>
                <ToastContainer />
            </S.Wrap>
        </>
    )
}

export default Login;