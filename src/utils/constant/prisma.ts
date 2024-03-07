import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;

export const user = prisma.user; // 옵셔널 체이닝 제거
export const application = prisma.application; // 'application'을 실제 모델 이름인 'apply'로 변경
