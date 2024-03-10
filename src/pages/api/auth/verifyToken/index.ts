import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req : NextApiRequest, res : NextApiResponse) {
    const token = req.cookies.token;
    const JWT_SECRET = process.env.JWT_SECRET;
    // console.log(token);
    try {
        const decoded = jwt.verify(token as string, JWT_SECRET ?? 'D3FAu1T53cR3tK3Y!');
        const userData = {
            id: typeof decoded === 'string' ? decoded : decoded.id,
        };
        if (userData.id === undefined) {
            throw new Error('Unauthorized');
        }
        const user = userData.id; 
        res.status(200).json({ token: user });
    } catch (error: unknown) {
        console.error(error); // 서버 로그에 에러 기록
        res.status(401).json({ error: 'Unauthorized', message: (error as Error).message });
    }
}