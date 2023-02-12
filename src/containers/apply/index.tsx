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
                    <S.UserDiv>
                        <S.InputDiv>
                            <div>
                                <S.Username {...register("name", {
                                    required: "이름은 필수 입니다",
                                    minLength: {
                                        value: 2,
                                        message: "이름은 2자 이상이어야 합니다"
                                    },
                                    maxLength: {
                                        value: 4,
                                        message: "이름은 4자 이하이어야 합니다"
                                    }
                                })} placeholder="이름" />
                            </div>
                            <S.UserMessage>{errors.name?.message}</S.UserMessage>
                        </S.InputDiv>
                    </S.UserDiv>
                    <S.UserDiv>
                        <S.InputDiv>
                            <div>
                                <S.Username {...register("studentId", {
                                    required: "학번은 필수 입니다",
                                    minLength: {
                                        value: 2,
                                        message: "학번은 2자 이상이어야 합니다"
                                    },
                                    maxLength: {
                                        value: 4,
                                        message: "학번은 4자 이하이어야 합니다"
                                    }
                                })} placeholder="학번" />
                            </div>
                            <S.UserMessage>{errors.studentId?.message}</S.UserMessage>
                        </S.InputDiv>
                    </S.UserDiv>
                    <S.PasswordDiv>
                        <S.InputDiv>
                            <div>
                                <S.Password {...register("introduce", {
                                    required: "자기소개는 필수 입니다",
                                    minLength: {
                                        value: 5,
                                        message: "자기소개는 5자 이상이어야 합니다"
                                    }
                                })} placeholder="자기소개" />
                            </div>
                            <S.Message>{errors.introduce?.message}</S.Message>
                        </S.InputDiv>
                    </S.PasswordDiv>
                    <S.LoginButton>Login</S.LoginButton>
                </S.LoginFrom>
            </S.Wrap>
        </>
    )
}

export default ApplyPage;