import {PrismaClient} from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

export async function POST(req) {
    let reqBody;
    try {
        reqBody = await req.json();
    } catch (error) {
        return new Response(JSON.stringify({error: 'Invalid request body'}), {status: 400});
    }

    const {email} = reqBody;

    if (!email) {
        return new Response(JSON.stringify({error: 'Email is required'}), {status: 400});
    }

    const user = await prisma.user.findUnique({
        where: {email},
    });

    if (!user) {
        return new Response(JSON.stringify({error: 'User not found'}), {status: 404});
    }

    const resetToken = generateResetToken();

    const name = user.name;
    const role = user.role;
    const student = user.student;
    const createdAt = user.createdAt;
    const updatedAt = user.updatedAt;

    await prisma.user.update({
        where: {email},
        data: {
            resetToken,
            resetTokenExpiry: new Date(Date.now() + 3600000), // 1 hour expiry
            name,
            role,
            student,
            createdAt,
            updatedAt
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
        html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Reset</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; margin: 0; padding: 20px; display: flex; justify-content: center; align-items: center; height: 100vh;" bgcolor="#f4f4f4">
        <div style="max-width: 600px; margin: 20px auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 20px;">
                <h1 style="color: #2c3e50; font-size: 24px;">Password Reset</h1>
            </div>
            <div style="margin-bottom: 20px;">
                <p style="color: #34495e;">We received a request to reset your password for your account. Please click the button below to reset your password:</p>
                <div style="text-align: center; margin: 30px 0;">
                    <a href="${process.env.NEXT_PUBLIC_BASE_URL}/auth/reset/password?token=${resetToken}" style="background-color: #28a745; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-weight: bold;">Reset Password</a>
                </div>
                <p style="color: #34495e;">If you did not request a password reset, please ignore this email or reply to let us know. This link will expire in 1 hour.</p>
            </div>
            <div style="text-align: center; font-size: 14px; color: #7f8c8d;">
                <p>If you're having trouble clicking the password reset button, copy and paste the URL below into your web browser:</p>
                <p style="margin-top: 10px; color: #3498db;">${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${resetToken}</p>
            </div>
            <div style="text-align: center; font-size: 12px; color: #95a5a6; margin-top: 20px;">
                <p>Best regards,</p>
                <p>The Intern Team</p>
            </div>
        </div>
    </body>
    </html>
    `
    };


    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({message: 'Email sent'}), {status: 200});
    } catch (error) {
        console.error('Error sending email: ', error);
        return new Response(JSON.stringify({message: 'Error sending email'}), {status: 500});
    }
}

function generateResetToken() {
    return [...Array(30)].map(() => Math.random().toString(36)[2]).join('');
}
