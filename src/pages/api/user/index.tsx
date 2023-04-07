import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';

import { student } from '../../../utils/constant/prisma';
import { authOptions } from '../auth/[...nextauth]';

export default async function User(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const session = await getServerSession(req, res, authOptions);
  const nickName = session?.user?.name;

  const exitsStudent = await student?.findUnique({
    where: {
      nickName: nickName || undefined,
    },
    select: {
      phoneNumber: true,
      introduce: true,
      field: true,
      portfolio: true,
    },
  });

  if (exitsStudent?.introduce === null) {
    return res.send({ ok: false, message: '불러올 정보가 없습니다.' });
  }

  return res.send({ ok: true, exitsStudent });
}
