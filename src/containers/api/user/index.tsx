import { NextApiRequest, NextApiResponse } from "next";
import prisma from "src/lib/ga/prisma";

export default async function User(req: NextApiRequest, res: NextApiResponse) {
    const { studentId } = req.body;

    const student = await prisma.student.findUnique({
        where: {
            studentId: studentId,
        },
    })

    if (student?.introduce === null) {
        return res.send({ ok: false, message: "불러올 정보가 없습니다." });
    }

    return res.send({ ok: true, student });
}
