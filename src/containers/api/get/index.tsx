import { NextApiRequest, NextApiResponse } from "next";
import apply from "src/lib/ga/apply";

export default async function Get(req: NextApiRequest, res: NextApiResponse) {
    const students = await apply.student.findMany({
        orderBy: {
            createdAt: "desc",
        },
    })
    return res.send(students);
}
