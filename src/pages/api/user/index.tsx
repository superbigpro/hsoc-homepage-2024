import { NextApiRequest, NextApiResponse } from "next";
import base85 from 'base85';
import prisma from "src/utils/prisma";

export default async function User(req: NextApiRequest, res: NextApiResponse) {
    const { nickName } = req.body;
    const decodedNickname = base85.decode(`${nickName}`);
    console.log(decodedNickname, 'decodedNickname');

    const student = await prisma.student.findUnique({
        where: {
            nickName: decodedNickname || nickName,
        }, select: {
            phoneNumber: true,
            introduce: true,
            field: true,
            portfolio: true,
        }
    })

    if (student?.introduce === null) {
        return res.send({ ok: false, message: "불러올 정보가 없습니다." });
    }

    return res.send({ ok: true, student });
}
