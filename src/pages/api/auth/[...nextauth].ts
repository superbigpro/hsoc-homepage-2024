import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from 'bcrypt';
import apply from "../../../lib/ga/apply";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(apply),
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
        const student = await apply.student.findUnique({
          where: {
            nickName: id,
          }
        })

        async function checkPassword(password: string) {
          const hashedPassword = await bcrypt.hash(password, 10);
          const ok = await bcrypt.compare(password, hashedPassword);
          return ok;
        }

        if (student && await checkPassword(password)) {
          return { id: "1", name: student.studentId, email: student.role };
        } else {
          return null;
        }
      },
    }),
  ]
};

export default NextAuth(authOptions);