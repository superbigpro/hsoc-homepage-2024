import { NextApiRequest, NextApiResponse } from 'next';

import * as bcrypt from 'bcrypt';

import { student } from '../../../utils/constant/prisma';

export default async function Create(req: NextApiRequest, res: NextApiResponse) {
  const { username, name, school_id, password } = req.body;

  const exitsNickName = await student?.first({
    where: {
      username : username
    },
  });

  if (exitsNickName) {
    return res.send({ ok: false, message: '이미 존재하는 학생입니다.' });
  }

  async function hashPassword() {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  const hashedPassword = await hashPassword();

  await student?.create({
    data: {
      nickName,
      name,
      studentId,
      password: hashedPassword,
    },
  });

  res.send({ ok: true, message: '회원가입이 완료되었습니다.' });
}