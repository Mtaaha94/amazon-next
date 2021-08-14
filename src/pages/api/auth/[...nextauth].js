import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    //..add more providers here
  ],
  // a database is optional , but req to persist account in a db
});
