import { NextApiRequest, NextApiResponse } from "next";
import prisma from "src/utils/prisma";
import { student } from "src/utils/constant/student";

// Exclude keys from student
function exclude<Student, Key extends keyof Student>(
    student: Student,
    keys: Key[]
): Omit<Student, Key> {
    for (let key of keys) {
        delete student[key]
    }
    return student
}

export default async function Get(req: NextApiRequest, res: NextApiResponse) {
    const students = await student.findMany({
        orderBy: {
            id: "asc",
        },
    })

    const studentsWithoutPassword = students.map((student) => {
        return exclude(student, ["password"])
    })

    return res.send(students);
}
