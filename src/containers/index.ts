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
        password: {
            message: string;
        };
        passwordCheck: {
            message: string;
        };
    };
    name: string;
    studentId: string;
    phoneNumber: string;
    introduce: string;
    password: string;
    passwordCheck: string;
    dashboardId: string;
    dashboardPassword: string;
};