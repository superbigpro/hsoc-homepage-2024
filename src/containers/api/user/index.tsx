import { NextApiRequest, NextApiResponse } from "next";
import prisma from "src/lib/ga/apply";

export default async function User(req: NextApiRequest, res: NextApiResponse) {
    const { studentId } = req.body;

    const student = await prisma.student.findUnique({
        where: {
            studentId: studentId,
        },
    })

    if (!student?.introduce) {
        return res.send({ ok: false, message: "신청이 완료되지 않았습니다." });
    }

    return res.send(student);
}
