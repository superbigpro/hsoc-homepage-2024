export interface FormProps {
    errors: {
        nickName: {
            message: string;
        }
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
        field: {
            message: string;
        };
        portfolio: {
            message: string;
        };
    };
    nickName: string;
    name: string;
    studentId: string;
    phoneNumber: string;
    introduce: string;
    password: string;
    passwordCheck: string;
    field: string;
    portfolio: string;
    dashboardId: string;
    dashboardPassword: string;
};

export interface Student {
    id: number,
    name: string,
    studentId: string,
    nickName: string,
    phoneNumber: string,
    introduce: string;
    role: string;
    field: string;
    portfolio: string;
}