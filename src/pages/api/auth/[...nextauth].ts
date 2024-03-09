// pages/api/auth/[...nextauth].ts

import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from 'bcrypt';
import prisma from '../../../utils/constant/prisma';

// 비밀번호 확인 함수
async function checkPassword(userPassword: string, inputPassword: string) {
  return bcrypt.compare(inputPassword, userPassword);
}

export const authOptions: NextAuthOptions = {
  // NextAuth의 Prisma Adapter를 사용하여 DB 모델과 연결합니다.
  adapter: PrismaAdapter(prisma),
  // 세션 설정: JWT 방식을 사용합니다.
  session: {
    strategy: 'jwt',
  },
  // 인증 제공자 설정: 여기서는 자격 증명을 사용합니다.
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // 사용자 입력 값을 검증합니다.
        if (credentials) {
          const { username, password } = credentials;
          const user = await prisma.user.findUnique({
            where: { username },
          });
          // 사용자가 존재하고 비밀번호가 일치한다면 사용자 데이터를 반환합니다.
          if (user && await checkPassword(user.password, password)) {
            return { id: user.id, name: user.username, email: user.email };
          }
        }
        // 그렇지 않으면 null을 반환하여 인증 실패를 나타냅니다.
        return null;
      }
    })
  ],
  // JWT와 세션 콜백을 설정하여 토큰과 세션 커스터마이징을 합니다.
  callbacks: {
    jwt: async ({ token, user }) => {
      // 최초 로그인 시 user 객체가 존재하면 토큰에 사용자 ID를 추가합니다.
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: async ({ session, token }) => {
      // 세션 토큰에 사용자 ID를 추가합니다.
      if (token.id && session.user) {
        session.user.id = token.id;
      }
      return session;
    }
  },
  // 여기에 추가 설정이 필요하다면 추가합니다.
};

// NextAuth 함수를 export default 합니다.
export default NextAuth(authOptions);
