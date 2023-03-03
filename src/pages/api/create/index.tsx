import { NextApiRequest, NextApiResponse } from "next";
import * as bcrypt from 'bcrypt'
import prisma from "src/lib/prisma";

export default async function Create(req: NextApiRequest, res: NextApiResponse) {
    const { nickName, name, studentId, password } = req.body;
    const student = prisma.student

    if (req.body.studentId[0] !== "C" && req.body.studentId[0] !== "N" && req.body.studentId[0] !== "G") {
        return res.send({ ok: false, message: "학번 형식이 틀렸습니다." });
    }

    const exitsNickName = await student.findUnique({
        where: {
            nickName,
        },
    })

    if (exitsNickName) {
        return res.send({ ok: false, message: "이미 존재하는 학생입니다." });
    }

    async function hashPassword() {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }

    const hashedPassword = await hashPassword();

    await student.create({
        data: {
            nickName,
            name,
            studentId,
            password: hashedPassword,
        },
    })

    res.send({ ok: true, message: "회원가입이 완료되었습니다." });
}
