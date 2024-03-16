import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { db } from '@/db'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Please enter your username" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials, req) {
        const { username, password } = credentials ?? { username: '', password: '' }

        const user = await db.users.findFirst({
          where: {
            username: username,
            password_hash: password,
          },
        })


        // If a user is found, return the user object
        if (user) {
          return user as any
        }

        // If no user is found or the credentials are invalid, return null
        return null
      }
    })
  ]
})

export { handler as GET, handler as POST }
