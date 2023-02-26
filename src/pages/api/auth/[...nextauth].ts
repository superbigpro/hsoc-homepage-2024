import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "react-router-dom";
import apply from "../../../lib/ga/apply";

const baseUrl = "http://localhost:3000"

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
        const { callbackUrl } = credentials as {
          callbackUrl: string;
        };
        const { id, password } = credentials as {
          id: string;
          password: string;
        };
        const student = await apply.student.findUnique({
          where: {
            nickName: id,
          }
        })

        if (callbackUrl === `${baseUrl}/dashboard`) {
          if (student?.role === "OPERATOR") {
            return { id: "1", email: "hsoc" };
          } else if (id !== "hansei@hsoc" || password !== "hsocmaster") {
            throw new Error("Login Failed");
          }
          return { id: "1", email: "hsoc" };
        } else if (callbackUrl) {
          if (!student) {
            throw new Error("Login Failed");
          }
          return { id: "1", name: student.studentId };
        }
        throw new Error("Login Failed");
      },
    }),
  ]
};

export default NextAuth(authOptions);