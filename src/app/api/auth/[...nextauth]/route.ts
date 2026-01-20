import { db } from "@/database/connection";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  adapter: DrizzleAdapter(db),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT for stateless sessions (or "database" for server-side storage)
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    // Add user ID to the session object
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id; // Attach user ID to session
      }
      return session;
    },
    // Add user ID to the JWT token
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Store user ID in JWT
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);



export { handler as GET, handler as POST };


