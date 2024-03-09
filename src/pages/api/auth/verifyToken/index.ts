import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req : NextApiRequest, res : NextApiResponse) {
    const { token } = req.cookies;
    const JWT_SECRET = process.env.JWT_SECRET;

    try {
        // 토큰 검증
        const decoded = jwt.verify(token || '', JWT_SECRET ?? 'D3FAu1T53cR3tK3Y!');
        const userData = {
            id: typeof decoded === 'string' ? decoded : decoded.id,
        };
        if (userData.id === undefined) {
            throw new Error('Unauthorized');
        }
        res.status(200).json({ id: userData });
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized' });
    }
}