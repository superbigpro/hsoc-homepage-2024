import { NextApiRequest, NextApiResponse } from "next";
import prisma from "src/lib/ga/prisma";

export default async function RoleUpdate(req: NextApiRequest, res: NextApiResponse) {
    const { studentId, role } = req.body;
    const student = prisma.student

    await student.update({
        where: {
            studentId,
        },
        data: {
            role,
        },
    })

    res.send({ ok: true, message: "변경이 완료되었습니다." });
}
