import { NextPage } from "next"
import { useSession } from "next-auth/react";
import NonePage from "src/containers/404";
import { Instance } from "src/lib/ga/api";
import { baseUrl } from "src/lib/ga/base-url";
import { Student } from "src/lib/ga/interface";
import Login from "./login";
import Main from "./main";

interface DashboardPageProps {
    students: Student[];
}


const DashboardPage: NextPage<DashboardPageProps> = ({ students }) => {
    const { data, status } = useSession();

    if (status === "authenticated" && data.user?.email === "ADMIN") {
        console.log(data.user?.email)
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
    const instance = Instance(`${baseUrl}/api/get`)
    const { data } = await instance.get('')
    return { students: data }
}

export default DashboardPage;