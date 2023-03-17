import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import prisma from "src/utils/prisma";
import { student } from "src/utils/constant/student";
import { authOptions } from "../auth/[...nextauth]";

export default async function Update(req: NextApiRequest, res: NextApiResponse) {
    const { phoneNumber, introduce, field, portfolio } = req.body;
    const session = await getServerSession(req, res, authOptions)

    const nickName = session?.user?.name;

    const exitsStudentId = await student.findUnique({
        where: {
            nickName: nickName || undefined,
        },
    })

    if (!exitsStudentId) {
        return res.send({ ok: false, message: "존재하지 않는 학생입니다." });
    }

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (year === 2023 && month === 3 && day >= 6 && day <= 7) {
        await student.update({
            where: {
                nickName: nickName || "",
            },
            data: {
                phoneNumber,
                introduce,
                field,
                portfolio
            },
        })
        res.send({ ok: true, message: "신청이 완료되었습니다." });
    } else {
        return res.send({ ok: false, message: "신청 기간이 아닙니다." });
    }

}

