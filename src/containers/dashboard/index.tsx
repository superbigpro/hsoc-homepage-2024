import { NextPage } from "next"
import { useSession } from "next-auth/react";
import NonePage from "src/containers/404";
import { Instance } from "src/utils/api";
import { baseUrl } from "src/utils/base-url";
import { Student } from "src/utils/interface";
import Main from "./main";

interface DashboardPageProps {
    students: Student[];
}

const DashboardPage: NextPage<DashboardPageProps> = ({ students }) => {
    const { data, status } = useSession();

    if (status === "authenticated" && data?.user?.email === "ADMIN" || data?.user?.name === "엄준식") {
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