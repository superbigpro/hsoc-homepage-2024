import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from 'next-auth/next'
import prisma from "src/utils/prisma";
import { authOptions } from "../auth/[...nextauth]";

export default async function User(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const session = await getServerSession(req, res, authOptions)
    const nickName = session?.user?.name;

    const student = await prisma.student.findUnique({
        where: {
            nickName: nickName || "",
        }, select: {
            phoneNumber: true,
            introduce: true,
            field: true,
            portfolio: true,
        }
    })

    if (student?.introduce === null) {
        return res.send({ ok: false, message: "불러올 정보가 없습니다." });
    }

    return res.send({ ok: true, student });
}
