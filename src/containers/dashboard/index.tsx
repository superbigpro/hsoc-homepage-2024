import { NextPage } from "next"
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { FormEventHandler, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DashboardContentTitle } from "src/components/DashboardContentTitle";
import { Input } from "src/components/Input";
import { Instance } from "src/lib/ga/api";
import { FormProps } from "../apply";
import Loading from "./loading";
import Login from "./login";
import Main from "./main";
import * as S from "./styled"

export interface Student {
    name: string,
    studentId: string,
    phoneNumber: string,
    introduce: string;
}

interface DashboardPageProps {
    students: Student[];
}


const DashboardPage: NextPage<DashboardPageProps> = ({ students }) => {
    const {status } = useSession();

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