import NextAuth, { NextAuthOptions, Session, SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { JWT } from "next-auth/jwt";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        if (!credentials) {
          throw new Error("Credentials not provided.");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
          include: { subscriptions: true },
        });

        if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
          throw new Error("Email atau password salah.");
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt" as SessionStrategy,
    maxAge: 24 * 60 * 60, // 24 hours
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.subscriptions = Array.isArray(token.subscriptions)
          ? (token.subscriptions as { id: string; planName: string; status: string; expiresAt: Date }[])
          : [];
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        const userWithSubscription = await prisma.user.findUnique({
          where: { id: user.id },
          include: { subscriptions: true }, // Ambil data subscriptions
        });
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.subscriptions =
          (userWithSubscription?.subscriptions.map((sub) => ({
            id: sub.id,
            planName: sub.planName,
            status: sub.status,
            expiresAt: sub.expiresAt,
          })) as { id: string; planName: string; status: string; expiresAt: Date }[]) || [];
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
