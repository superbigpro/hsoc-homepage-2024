import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "react-router-dom";
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
        if (!student) {
          throw new Error("Login Failed");
        }
        if (student.password !== password) {
          throw new Error("Login Failed");
        }
        return { id: "1", name: student.studentId, email: student.role };
      },
    }),
  ]
};

export default NextAuth(authOptions);