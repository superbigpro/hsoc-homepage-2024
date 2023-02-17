import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import { Input } from "src/components/Input";
import { FormProps } from "src/containers/apply";
import * as S from "./styled";

const Login: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormProps>();

    const onValid = async (formData: FormProps) => {
        await signIn("credentials", {
            id: formData.id,
            password: formData.password,
            redirect: false,
        }).then((res) => {
            res?.ok ? (
                toast.success('Login Success', { position: "bottom-right" })
            ) : (
                toast.error('Login Failed', { position: "bottom-right" }),
                setValue("id", ""),
                setValue("password", "")
            )
    })
}
return (
    <>
        <S.Wrap>
            <S.FormDiv onSubmit={handleSubmit(onValid)}>
                <S.InfoDiv>
                    <Input register={register} errors={errors} title="아이디" name="id" />
                    <Input register={register} errors={errors} title="비밀번호" name="password" type={"password"} />
                </S.InfoDiv>
                <S.Button>로그인</S.Button>
            </S.FormDiv>
            <ToastContainer />
        </S.Wrap>
    </>
)
}

export default Login;