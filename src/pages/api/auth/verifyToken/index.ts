import { NextApiRequest, NextApiResponse } from 'next';

import jwt from 'jsonwebtoken';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.cookies.token;
  const JWT_SECRET = process.env.JWT_SECRET;

  try {
    const decoded = jwt.verify(token as string, JWT_SECRET ?? 'D3FAu1T53cR3tK3Y!');
    const userData = {
      id: typeof decoded === 'string' ? decoded : decoded.id,
    };
    if (userData.id === undefined) {
      throw new Error('토큰이 올바르지 않습니다.');
    }
    const user = userData.id;
    res.status(200).json({ token: user });
  } catch (error: unknown) {
    console.error(error);
    res.send({ ok: false, error: 'Unauthorized', message: (error as Error).message });
  }
}
