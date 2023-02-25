import { NextPage } from "next"
import { useSession } from "next-auth/react";
import { Instance } from "src/lib/ga/api";
import Loading from "./loading";
import Login from "./login";
import Main from "./main";
import * as S from "./styled"

export interface Student {
    id: number,
    name: string,
    studentId: string,
    phoneNumber: string,
    password: string,
    introduce: string;
    // role: Ro
}

interface DashboardPageProps {
    students: Student[];
}


const DashboardPage: NextPage<DashboardPageProps> = ({ students }) => {
    const { status } = useSession();

    if (status === "authenticated") {
        return (
            <Main students={students} />
        )
    } else if (status === "loading") {
        return (
            <Loading />
        )
    } else {
        return (
            <>
                <Login />
            </>
        )
    }
}



DashboardPage.getInitialProps = async () => {
    const instance = Instance('http://localhost:3000/api/get')
    const { data } = await instance.get('')
    return { students: data }
}

export default DashboardPage;