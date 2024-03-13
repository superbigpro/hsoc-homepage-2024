import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ ok: false, error: 'Unauthorized', message: '토큰이 제공되지 않았습니다.' });
  }

  const JWT_SECRET = process.env.JWT_SECRET || 'D3FAu1T53cR3tK3Y!'; // 환경 변수가 없을 경우 기본값 사용

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const userData = {
      id: typeof decoded === 'string' ? decoded : decoded.id,
    };

    if (userData.id === undefined) {
      throw new Error('토큰이 올바르지 않습니다.');
    }

    res.status(200).json({ token: userData.id });
  } catch (error) {
    console.error(error);
    res.status(401).json({ ok: false, error: 'Unauthorized', message: '토큰이 유효하지 않습니다.' });
  }
}
