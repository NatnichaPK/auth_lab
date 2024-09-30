import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import LineProvider from "next-auth/providers/line";

const handler = NextAuth({
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  providers: [
    LineProvider({
      clientId: "",
      clientSecret: "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      async authorize(credentials, req) {
        console.log("Checking credentials");
        const loginUser = {
          email: credentials?.email,
          password: credentials?.password,
        };
        
        const user = { id: "1", email: credentials?.email };
        if (loginUser.password === "1234") {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
