export interface FormProps {
  errors: {
    username: {
      message: string;
    };
    name: {
      message: string;
    };
    school_id: {
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
  username: string;
  name: string;
  school_id: string;
  phone_number: string;
  introduce: string;
  password: string;
  passwordCheck: string;
  field: string;
  portfolio: string;
  dashboardId: string;
  dashboardPassword: string;
}

export interface Student {
  id: number;
  name: string;
  studentId: string;
  nickName: string;
  phoneNumber: string;
  introduce: string;
  role: string;
  field: string;
  portfolio: string;
}
