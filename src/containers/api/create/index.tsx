import { NextApiRequest, NextApiResponse } from "next";
import prisma from "src/lib/ga/apply";

export default async function Create(req: NextApiRequest, res: NextApiResponse) {
    const { nickName, name, studentId, password } = req.body;
    const student = prisma.student

    if (req.body.studentId[0] !== "C" && req.body.studentId[0] !== "N" && req.body.studentId[0] !== "G") {
        return res.send({ ok: false, message: "학번 형식이 틀렸습니다." });
    }

    // if (req.body.phoneNumber[0] !== "0" && req.body.phoneNumber[2] !== "0" || req.body.phoneNumber[1] !== "1") {
    //     return res.send({ ok: false, message: "전화번호 형식이 틀렸습니다." });
    // }

    const exitsStudentId = await student.findUnique({
        where: {
            studentId,
        },
    })
    // const exitsPhoneNumber = await student.findUnique({
    //     where: {
    //         phoneNumber,
    //     },
    // })

    const exitsNickName = await student.findUnique({
            where: {
                nickName,
            },
        })

    if (exitsStudentId || exitsNickName) {
        return res.send({ ok: false, message: "이미 신청하셨습니다." });
    }

    await student.create({
        data: {
            nickName,
            name,
            studentId,
            // phoneNumber,
            password,
        },
    })
    res.send({ ok: true, message: "신청이 완료되었습니다." });
}
