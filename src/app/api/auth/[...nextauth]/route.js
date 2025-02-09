import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import User from "@/src/models/User";
import connect from "@/src/utils/db";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connect();

        const user = await User.findOne({ email: credentials.email });
        if (!user) throw new Error("No user found with this email");

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordCorrect) throw new Error("Incorrect password");

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 120, //60 second timeout,
    updateAge: 60,
  },

  // Ensure user ID is added to the session
  callbacks: {
    async session({ session }) {
      await connect();

      const dbUser = await User.findOne({ email: session.user.email });

      // Debugging logs
      console.log("Session Email:", session.user.email);
      console.log("DB User Found:", dbUser);

      if (dbUser) {
        session.user.id = dbUser._id.toString();  // Attach the user ID to the session
        console.log("User ID added to session:", session.user.id);
      } else {
        session.user.id = null;
        console.log("No user found in DB, User ID set to null");
      }

      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
