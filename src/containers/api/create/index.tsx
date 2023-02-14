import { NextApiRequest, NextApiResponse } from "next";
import apply from "src/lib/ga/apply";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name, studentId, phoneNumber, introduce } = req.body;
    const exitsStudentId = await apply.student.findUnique({
        where: {
            studentId,
        },
    })
    const exitsPhoneNumber = await apply.student.findUnique({
        where: {
            phoneNumber,
        },
    })

    if (exitsStudentId || exitsPhoneNumber) {
        return res.send({ok: false, message: "이미 신청하셨습니다."});
    }

    await apply.student.create({
        data: {
            name,
            studentId,
            phoneNumber,
            introduce,
        },
    })
    res.send({ok: true, message: "신청이 완료되었습니다."});
}
