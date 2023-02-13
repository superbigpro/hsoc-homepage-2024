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
        console.log(exitsStudentId, exitsPhoneNumber, "이미 신청하셨습니다.")
        return res.send({ok: false, error: "이미 신청하셨습니다."});
    }

    const student = await apply.student.create({
        data: {
            name,
            studentId,
            phoneNumber,
            introduce,
        },
    })
    return res.status(200).end();
}
