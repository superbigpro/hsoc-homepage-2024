import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextApiRequest } from 'next';

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import * as bcrypt from 'bcrypt';

import prisma, { user } from '../../../utils/constant/prisma';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        username: { label: "username", type: "text" },
        password: {  label: "password", type: "password" }
      },
      async authorize(credentials: Record<any, any>, req: NextApiRequest) {
        const { username, password } = credentials as {
          username: string;
          password: string
        };
        const exitsStudent = await user?.findUnique({
          where: {
            username: username,
          },
        });

        async function checkPassword(password: string) {
          const hashedPassword = await bcrypt.hash(exitsStudent?.password || '', 10);
          const ok = await bcrypt.compare(password, hashedPassword);
          return ok;
        }

        if (exitsStudent && (await checkPassword(password))) {
          return { id: exitsStudent.id, name: exitsStudent.username, email: exitsStudent.role };
        } else {
          return null;
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);