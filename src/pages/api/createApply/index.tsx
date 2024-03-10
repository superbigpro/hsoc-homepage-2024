import { NextApiRequest, NextApiResponse } from 'next';

import { user, application } from '@/utils/constant/prisma';

export default async function Update(req: NextApiRequest, res: NextApiResponse) {
  const { phone_number, introduce, field, portfolio } = req.body;
  // 토큰이 존재하지 않거나 id 속성이 없는 경우 에러를 반환합니다.
  const token = req.headers.cookie;
  // 토큰이 유효한 경우 해당하는 학생 정보를 찾습니다.
  const existingStudent = await user?.findUnique({
    where: {
      id: token?.id, // Update type assertion to ensure 'id' property is of type 'number'
    },
  });

  // 해당하는 학생이 없는 경우 에러를 반환합니다.
  if (!existingStudent) {
    return res.send({ ok: false, message: '존재하지 않는 학생입니다.' });
  }

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (year === 2024 && month === 3 && day >= 6 && day <= 7) {
    try {
      // 신청 기간이라면, 새로운 신청서를 생성합니다.
      await application.create({
        data: {
          phone_number,
          introduce,
          field,
          portfolio,
          userId: existingStudent.id, // 신청서와 학생을 연결합니다. userId 필드는 학생의 ID를 가리킵니다.
          userName: existingStudent.name // 사용자 이름 추가
        }
      });
      res.send({ ok: true, message: '신청이 완료되었습니다.' });
    } catch (error) {
      console.error('신청서 생성 중 오류:', error);
      res.send({ ok: false, message: '신청서를 생성하는 중에 오류가 발생했습니다.' });
    }
  } else {
    return res.send({ ok: false, message: '신청 기간이 아닙니다.' });
  }
}
