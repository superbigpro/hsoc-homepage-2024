import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

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
        id: { label: "username", type: "text", placeholder: "jsmith" },
        password: {  label: "password", type: "password" }
      },
      async authorize(credentials, req) {
        const { id, password } = credentials as {
          id: string;
          password: string
        };
        const exitsStudent = await user?.findUnique({
          where: {
            username: id,
          },
        });

        async function checkPassword(password: string) {
          const hashedPassword = await bcrypt.hash(exitsStudent?.password || '', 10);
          const ok = await bcrypt.compare(password, hashedPassword);
          return ok;
        }

        if (exitsStudent && (await checkPassword(password))) {
          return { id: '1', name: exitsStudent.username, email: exitsStudent.role };
        } else {
          return null;
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
