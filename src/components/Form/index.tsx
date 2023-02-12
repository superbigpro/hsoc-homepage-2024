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

export const Form: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<IForm>();

    const onValid = (data: IForm) => {
        setValue("name", "");
        setValue("studentId", "");
        setValue("introduce", "");
    };
    return (
        <></>
    )
}