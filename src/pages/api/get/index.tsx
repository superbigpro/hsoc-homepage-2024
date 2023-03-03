import { NextApiRequest, NextApiResponse } from "next";
import prisma from "src/lib/prisma";

export default async function Get(req: NextApiRequest, res: NextApiResponse) {
    const students = await prisma.student.findMany({
        orderBy: {
            id: "asc",
        },
    })
    return res.send(students);
}
