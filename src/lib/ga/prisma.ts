import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.student.create({
        data: {
            nickName: "hansei@hsoc",
            name: "hansei",
            studentId: "C0000",
            password: "hsocmaster",
            role: 'ADMIN',
        }
    })
};

main();

export default prisma;
