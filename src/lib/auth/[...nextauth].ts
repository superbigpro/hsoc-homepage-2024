import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (email !== "hansei@hsoc" || password !== "hsocmaster") {
          throw new Error("invalid credentials");
        }
        return {
          id: "1234",
          name: "hsoc",
          email: "hsoc@gmail.com",
          role: "admin",
        };
      },
    }),
  ],
  pages: {
    signIn: "/dashboard/login",
    signOut: "/dashboard/logout",
  },
};

export default NextAuth(authOptions);