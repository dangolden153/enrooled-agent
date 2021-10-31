/* eslint-disable no-param-reassign */
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // session: {
  //   jwt: true,
  // },
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

    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),

    // Providers.Twitter({
    //   clientId: process.env.TWITTER_CLIENT_ID,
    //   clientSecret: process.env.TWITTER_CLIENT_SECRET,
    // }),
  ],

  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    jwt: async (token, user) => {
      // eslint-disable-next-line no-unused-expressions
      user && (token = { ...token, ...user });
      return token;
    },
    session: async (session, data) => {
      console.log("data", data);
      // session.user = { ...data.user || data };
      session.user = { ...data };
      session.accessToken = data.accessToken;
      return session;
    },
  },
});
