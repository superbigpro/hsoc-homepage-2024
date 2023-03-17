import { student } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async function RoleUpdate(req: NextApiRequest, res: NextApiResponse) {
    const { nickName, role } = req.body;

    await student?.update({
        where: {
            nickName,
        },
        data: {
            role,
        },
    })

    res.send({ ok: true, message: "변경이 완료되었습니다." });
}
