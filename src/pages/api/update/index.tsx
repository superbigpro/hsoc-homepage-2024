import { NextApiRequest, NextApiResponse } from "next";
import prisma from "src/utils/prisma";

export default async function Update(req: NextApiRequest, res: NextApiResponse) {
    const { nickName, phoneNumber, introduce, field } = req.body;
    console.log(field)
    const student = prisma.student

    const exitsStudentId = await student.findUnique({
        where: {
            nickName,
        },
    })

    if (!exitsStudentId) {
        return res.send({ ok: false, message: "존재하지 않는 학생입니다." });
    }

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // if (year === 2023 && month === 3 && day >= 6 && day <= 8) {
    //     await student.update({
    //         where: {
    //             studentId,
    //         },
    //         data: {
    //             phoneNumber,
    //             introduce,
    //         },
    //     })
    // } else {
    //     return res.send({ ok: false, message: "신청 기간이 아닙니다." });
    // }

    await student.update({
        where: {
            nickName,
        },
        data: {
            phoneNumber,
            introduce,
            field,
        },
    })

    res.send({ ok: true, message: "신청이 완료되었습니다." });
}
