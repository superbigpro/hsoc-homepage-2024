import { NextApiRequest, NextApiResponse } from 'next';

import { user, application } from '@/utils/constant/prisma';

export default async function Update(req: NextApiRequest, res: NextApiResponse) {
  const { phone_number, introduce, field, portfolio, token } = req.body;

  if (!token) {
    return res.send({ ok: false, message: '로그인이 필요합니다.' });
  }

  const existingStudent = await user?.findUnique({
    where: {
      id: token, // Update type assertion to ensure 'id' property is of type 'number'
    },
  });

  // 해당하는 학생이 없는 경우 에러를 반환합니다.
  if (!existingStudent) {
    return res.send({ ok: false, message: '존재하지 않는 학생입니다.' });
  }

  const alreadyApplied = await application.findFirst({
    where: {
      userId: existingStudent.id,
    },
  });

  if (alreadyApplied) {
    return res.send({ ok: false, message: '이미 신청하셨습니다.' });
  }

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (year === 2024 && month === 3 && day >= 13 && day <= 15) {
    try {
      await application.create({
        data: {
          phone_number,
          introduce,
          field,
          portfolio,
          userId: existingStudent.id,
          userName: existingStudent.name,
        },
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
