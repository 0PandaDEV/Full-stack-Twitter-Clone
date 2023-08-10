// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'

export default NuxtAuthHandler({
    pages: {
        signIn: '/login'
    },
    secret: 'enter-your-secret-here',
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
           clientId: 'enter-your-client-id-here',
           clientSecret: 'enter-your-client-secret-here'
        })
    ]
})
