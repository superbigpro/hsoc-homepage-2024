import { NextApiRequest, NextApiResponse } from 'next';

import * as bcrypt from 'bcrypt';

import { user } from '../../../utils/constant/prisma';

export default async function Create(req: NextApiRequest, res: NextApiResponse) {
  const { username, name, school_id, password } = req.body;

  const existingUser = await user.findUnique({
    where: {
      username: username,
    },
  });

  if (existingUser !== null) {
    return res.send({ ok: false, message: '이미 존재하는 사용자입니다.' });
  }

  async function hashPassword() {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  const hashedPassword = await hashPassword();

  const userData = await user.create({
    data: {
      username,
      name,
      school_id,
      password: hashedPassword,
    },
  });

  console.log(userData);
  res.send({ ok: true, message: '회원가입이 완료되었습니다.' });
}
