import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const student = prisma.student