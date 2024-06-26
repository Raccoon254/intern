import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare } from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const authOptions = {
    providers: [

        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,

            callbackUrl: process.env.CALLBACK,
        }),

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { },
                password: { }
            },
            async authorize(credentials) {

                const password = credentials.password
                const email = credentials.email

                const user = await prisma.user.findUnique({ where: { Email: email } })
                if (!user) return null
                const match = await compare(password, user.Password)
                if (match) {
                    return {
                        id: user.id,
                        email: user.email,
                        role: user.role
                    }
                } else {
                    return null
                }
            }
        })
    ],
    pages:{
        signIn: '/auth/login',
        error: '/auth/login',
        newUser: '/auth/register'
    },
    secret: process.env.AUTH_SECRET,
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60
    },
};

const handler = NextAuth(authOptions);

module.exports = { GET: handler, POST: handler };