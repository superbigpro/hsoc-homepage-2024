import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import prisma from '../../../../utils/constant/prisma';

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    // 사용자가 없거나 비밀번호가 일치하지 않으면 오류를 반환합니다.
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.send({ ok: false, message: '아이디 또는 비밀번호가 일치하지 않습니다.' });
    }

    // JWT 토큰 생성
    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET ?? 'D3!FAuC1T5#@3c%R3tK3Y!@1!SA#@',
      { expiresIn: '3d' },
    );

    // 쿠키로 토큰 설정
    res.setHeader(
      'Set-Cookie',
      `token=${token}; Path=/; SameSite=Lax; Max-Age=${3 * 24 * 60 * 60}`,
    ); //배포시엔 Secure 꼭 설정하기!!!!

    // 응답 반환
    res.status(200).json({ ok: true, token: token });
  } catch (error) {
    console.error('Login request failed:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
