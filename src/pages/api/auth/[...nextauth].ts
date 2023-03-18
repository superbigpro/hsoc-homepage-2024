import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from 'bcrypt';
import { student } from "@/utils";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { id, password } = credentials as {
          id: string;
          password: string;
        };
        const exitsStudent = await student?.findUnique({
          where: {
            nickName: id,
          }
        })

        async function checkPassword(password: string) {
          const hashedPassword = await bcrypt.hash(exitsStudent?.password || "", 10);
          const ok = await bcrypt.compare(password, hashedPassword);
          return ok;
        }

        if (exitsStudent && await checkPassword(password)) {
          return { id: "1", name: exitsStudent.nickName, email: exitsStudent.role };
        } else {
          return null;
        }
      },
    }),
  ]
};

export default NextAuth(authOptions);
