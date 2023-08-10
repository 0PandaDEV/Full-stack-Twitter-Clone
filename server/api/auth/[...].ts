import { NuxtAuthHandler } from "#auth";
import GithubProvider from "next-auth/providers/github";

export default NuxtAuthHandler({
  pages: {
    signIn: "/login",
  },
  secret: "7kzwa#9P#w@*gq@!%svy9WpPsNPqoF2h#mySv%2cvYK6x&o$*c8XuoWx@cYGWw8yZERBS^$5o@Q5Hh&3ZRaX%#^6Un#t#XY!xHD",
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
});
