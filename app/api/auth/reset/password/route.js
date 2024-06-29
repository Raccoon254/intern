import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req, res) {

    let reqBody;
    try {
        reqBody = await req.json();
    } catch (error) {
        return new Response(JSON.stringify({error: 'Invalid request body'}), {status: 400});
    }

    const { token, password } = reqBody;

    if (!token || !password) {
        return new Response(JSON.stringify({error: 'Token and password are required'}), {status: 400});
    }

    try {
        const user = await prisma.user.findFirst({
            where: { resetToken: token },
        });

        if (!user || user.resetTokenExpiry < new Date()) {
            return new Response(JSON.stringify({error: 'Invalid or expired token'}), {status: 400});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const name = user.name;
        const role = user.role;
        const email = user.email;
        const student = user.student;
        const createdAt = user.createdAt;
        const updatedAt = user.updatedAt;

        await prisma.user.update({
            where: { resetToken: token },
            data: {
                password: hashedPassword,
                resetToken: null,
                resetTokenExpiry: null,
                name,
                role,
                email,
                student,
                createdAt,
                updatedAt,
            },
        });

        return new Response(JSON.stringify({ message: 'Password reset successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error resetting password: ', error);
        return new Response(JSON.stringify({ error: 'Error resetting password' }), { status: 500 });
    }
}
