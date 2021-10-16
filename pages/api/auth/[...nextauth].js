/* eslint-disable no-param-reassign */
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "credentials",
      async authorize({ isLoggedIn, user, accessToken }) {
        if (isLoggedIn) {
          return {
            user: JSON.parse(user),
            accessToken,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      // eslint-disable-next-line no-unused-expressions
      user && (token = { ...token, ...user });
      return token;
    },
    session: async (session, data) => {
      session.user = { ...data.user };
      session.accessToken = data.accessToken;
      return session;
    },
  },
});
