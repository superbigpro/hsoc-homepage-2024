import { NextPage } from "next";
import * as S from "./styled";
import LogoBig from "src/assets/png/logo-big.png";
import { useForm } from "react-hook-form";

interface IForm {
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
    introduce: string;
};

const ApplyPage: NextPage = () => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<IForm>();

    const onValid = (data: IForm) => {
        setValue("name", "");
        setValue("studentId", "");
        setValue("introduce", "");
    };

    return (
        <>
            <S.LogoBigImage src={LogoBig.src} />
            <S.Wrap>
                <S.LoginFrom onSubmit={handleSubmit(onValid)}>
                        <S.InputDiv>
                            <S.Title>이름</S.Title>
                            <div>
                                <S.Username {...register("name", {
                                    required: "이름은 필수 입니다.",
                                    minLength: {
                                        value: 2,
                                        message: "이름은 2자 이상이어야 합니다."
                                    },
                                    maxLength: {
                                        value: 4,
                                        message: "이름은 4자 이하이어야 합니다."
                                    }
                                })} />
                            </div>
                            <S.UserMessage>{errors.name?.message}</S.UserMessage>
                        </S.InputDiv>
                        <S.InputDiv>
                            <S.Title>학번</S.Title> 
                            <S.Example>예) 클라우드보안과 1학년 1반 1번 - C1111</S.Example>
                            <div>
                                <S.Username {...register("studentId", {
                                    required: "학번은 필수 입니다.",
                                    minLength: {
                                        value: 5,
                                        message: "학번은 5자여야 합니다."
                                    },
                                    maxLength: {
                                        value: 5,
                                        message: "학번은 5자여야 합니다."
                                    }
                                })} />
                            </div>
                            <S.UserMessage>{errors.studentId?.message}</S.UserMessage>
                        </S.InputDiv>
                        <S.IntroduceDiv>
                            <S.Title>자기소개</S.Title> 
                            <div>
                                <S.Introduce {...register("introduce", {
                                    required: "자기소개는 필수 입니다.",
                                    minLength: {
                                        value: 5,
                                        message: "자기소개는 5자 이상이어야 합니다."
                                    }
                                })} 
                                v-model="text" />
                            </div>
                            <S.Message>{errors.introduce?.message}</S.Message>
                        </S.IntroduceDiv>
                    <S.LoginButton>Login</S.LoginButton>
                </S.LoginFrom>
            </S.Wrap>
        </>
    )
}

export default ApplyPage;