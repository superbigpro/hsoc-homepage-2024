import { NextApiRequest, NextApiResponse } from 'next';

import { user, application } from '@/utils/constant/prisma';

export default async function Update(req: NextApiRequest, res: NextApiResponse) {
  const { phoneNumber, introduce, field, portfolio, token } = req.body;

  const exitsStudentId = await user?.findUnique({
    where: {
      id : token.id || undefined,
    },
  });

  if (!exitsStudentId) {
    return res.send({ ok: false, message: '존재하지 않는 학생입니다.' });
  }

  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (year === 2023 && month === 3 && day >= 6 && day <= 7) {
    await student?.update({
      where: {
        nickName: nickName || '',
      },
      data: {
        phoneNumber,
        introduce,
        field,
        portfolio,
      },
    });
    res.send({ ok: true, message: '신청이 완료되었습니다.' });
  } else {
    return res.send({ ok: false, message: '신청 기간이 아닙니다.' });
  }
}
