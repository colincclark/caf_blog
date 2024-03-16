import bcrypt from "bcryptjs"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { db } from '@/db'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'username',
      // pass any HTML attribute to the <input> tag through each property of credentials
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Please enter your username" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) {
        const { username, password } = credentials ?? { username: '', password: '' }

        if (!username || !password) {
          throw new Error('Please provide both username and password');
        }

        const currentUser = await db.users.findFirst({
          where: {
            username: username
          },
        })

        console.log("currentUser: ", currentUser)

        if (!currentUser) {
          throw new Error("Please provide the correct credentials");
        }

        const passwordMatch = await bcrypt.compare(password, currentUser.password_hash);
        console.log("passwordMatch: ", passwordMatch)

        if (!passwordMatch) {
          throw new Error("Please provide the correct credentials");
        }

        return currentUser as any
      }
    })
  ]
})

export { handler as GET, handler as POST }
