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
        const { id, password } = credentials as {
          id: string;
          password: string;
        };
        if (id !== "hansei@hsoc" || password !== "hsocmaster") {
          throw new Error("Login Failed");
        }
        return { id: "1", ok: true, message: "Login Success" };
      },
    }),
  ],
  pages: {
    signIn: "/dashboard/login",
    signOut: "/dashboard/logout",
    error: "/dashboard/",
  },
};

export default NextAuth(authOptions);