import { NextApiRequest, NextApiResponse } from "next";
import prisma from "src/utils/prisma";

export default async function Get(req: NextApiRequest, res: NextApiResponse) {
    const students = await prisma.student.findMany({
        orderBy: {
            id: "asc",
        },
        select: {
            id: true,
            name: true,
            studentId: true,
            nickName: true,
            phoneNumber: true,
            introduce: true,
            role: true,
            field: true,
            portfolio: true,
        }
    })

    return res.send(students);
}
