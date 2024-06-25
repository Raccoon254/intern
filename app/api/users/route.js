import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function GET(req, res) {
    try {
        const users = await prisma.user.findMany();
        return new Response(JSON.stringify(users), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch users' }), { status: 500 });
    }
}

export async function POST(req, res) {
    try {
        const data = await req.json();
        const { email, password, role, student } = data;

        if (!email || !password || !role) {
            return new Response(JSON.stringify({ error: 'Email, password, and role are required' }), { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                role,
                student: student ? {
                    create: student
                } : undefined,
            },
        });
        return new Response(JSON.stringify(newUser), { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ error: 'Failed to create user' }), { status: 500 });
    }
}
