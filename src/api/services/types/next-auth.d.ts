import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    id: string;
    routeToken: string;
    user: DefaultSession["user"];
  }

  interface User extends DefaultUser {
    tokenCredentials: string;
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    routeToken: string;
    id: string;
  }
}