import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import { db } from "~/server/db";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if(!credentials?.email || !credentials?.password){
          throw new Error("Missing credentials");
        }

        const user = await db.user.findFirst({
          where: {
            email: credentials.email
          }
        });

        if(!user?.password){
          throw new Error("Invalid credentials");
        }

        const correctPassword = await bcrypt.compare(credentials.password, user.password
        );

        if(!correctPassword){
          throw new Error("Invalid credentials");
        }

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt"
  },
  debug: process.env.NODE_ENV !== "production",
}