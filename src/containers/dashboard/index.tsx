import { instance, Student } from "@/utils";
import { NextPage } from "next"
import { useSession } from "next-auth/react";
import NonePage from "src/containers/404";
import Main from "./main";

interface DashboardPageProps {
    students: Student[];
}

const DashboardPage: NextPage<DashboardPageProps> = ({ students }) => {
    const { data, status } = useSession();

    if (status === "authenticated" && data?.user?.email === "ADMIN") {
        return (
            <Main students={students} />
        )
    } else {
        return (
            <>
                <NonePage />
            </>
        )
    }
}


DashboardPage.getInitialProps = async () => {
    const { data } = await instance.get('/api/get')
    return { students: data }
}

export default DashboardPage;