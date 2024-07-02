import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackUrl: process.env.GOOGLE_CALLBACK_URL,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                
                const user = await prisma.user.findUnique({
                    where: { email: email }
                });
                
                if (!user) return null;
                
                const isValid = await compare(password, user.password);
                if (isValid) {
                    // fetch the user and return all the fields except the password
                    return {
                        id: user.id,
                        email: user.email,
                        role: user.role,
                        student: user.student,
                        createdAt: user.createdAt,
                    };
                } else {
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: '/auth/login',
        error: '/auth/login',
        newUser: '/auth/register'
    },
    secret: process.env.AUTH_SECRET,
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60 // 30 days
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
                token.email = user.email;
                token.id = user.id;
                token.student = user.student;
                token.createdAt = user.createdAt;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.role = token.role;
            session.user.email = token.email;
            session.user.id = token.id;
            session.user.student = token.student;
            session.user.createdAt = token.createdAt;
            return session;
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };