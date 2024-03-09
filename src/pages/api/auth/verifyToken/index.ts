import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req : NextApiRequest, res : NextApiResponse) {
    const token = req.cookies.token;
    const JWT_SECRET = process.env.JWT_SECRET;
    console.log(token);
    try {
        // 토큰 검증
        const decoded = jwt.verify(token || '', JWT_SECRET ?? 'D3FAu1T53cR3tK3Y!');
        const userData = {
            id: typeof decoded === 'string' ? decoded : decoded.id,
        };
        if (userData.id === undefined) {
            throw new Error('Unauthorized');
        }
        const user = userData.id; // Fix: Assign userData.id to a new variable 'user'
        res.status(200).json({ user });
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized' });
    }
}