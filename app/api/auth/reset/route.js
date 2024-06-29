import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

export async function POST(req) {
    let reqBody;
    try {
        reqBody = await req.json();
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });
    }

    const { email } = reqBody;

    if (!email) {
        return new Response(JSON.stringify({ error: 'Email is required' }), { status: 400 });
    }

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    const resetToken = generateResetToken();

    await prisma.user.update({
        where: { email },
        data: {
            resetToken,
            resetTokenExpiry: new Date(Date.now() + 3600000) // 1 hour expiry
        }
    });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: "hello@intern.co.ke",
        to: email,
        subject: 'Password Reset',
        text: `You requested a password reset. Click here to reset your password: ${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${resetToken}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Email sent' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email: ', error);
        return new Response(JSON.stringify({ message: 'Error sending email' }), { status: 500 });
    }
}

function generateResetToken() {
    return [...Array(30)].map(() => Math.random().toString(36)[2]).join('');
}
