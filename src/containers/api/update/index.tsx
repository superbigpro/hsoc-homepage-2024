import { NextApiRequest, NextApiResponse } from "next";
import prisma from "src/lib/ga/apply";

export default async function Update(req: NextApiRequest, res: NextApiResponse) {
    const { studentId, phoneNumber, introduce } = req.body;
    const student = prisma.student

    if (req.body.studentId[0] !== "C" && req.body.studentId[0] !== "N" && req.body.studentId[0] !== "G") {
        return res.send({ ok: false, message: "학번 형식이 틀렸습니다." });
    }

    if (req.body.phoneNumber[0] !== "0" && req.body.phoneNumber[2] !== "0" || req.body.phoneNumber[1] !== "1") {
        return res.send({ ok: false, message: "전화번호 형식이 틀렸습니다." });
    }

    const exitsStudentId = await student.findUnique({
        where: {
            studentId,
        },
    })

    if (!exitsStudentId) {
        return res.send({ ok: false, message: "존재하지 않는 학생입니다." });
    }

    if (new Date().getTime() < new Date("2022-02-27 00:00:00").getTime() || new Date().getTime() > new Date("2022-03-17 23:59:59").getTime()) {
        return res.send({ ok: false, message: "신청 기간이 아닙니다." });
    }

    await student.update({
        where: {
            studentId,
        },
        data: {
            phoneNumber,
            introduce,
        },
    })

    res.send({ ok: true, message: "신청이 완료되었습니다." });
}
