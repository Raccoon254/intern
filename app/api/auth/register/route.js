// POST
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const data = await req.json();
        const { name, email, university, course, phone, password } = data;

        // Validate the data
        if (!name || !email || !university || !course || !phone || !password) {
            return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
        }
        if (password.length < 8) {
            return new Response(JSON.stringify({ error: 'Password must be at least 8 characters' }), { status: 400 });
        }
        const phoneRegex = /^\d{12}$/;
        if (!phoneRegex.test(phone)) {
            return new Response(JSON.stringify({ error: 'Invalid phone number' }), { status: 400 });
        }
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 });
        }

        // Check if email already exists
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return new Response(JSON.stringify({ error: 'Email already in use' }), { status: 400 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user and student in a single transaction
        const newUser = await prisma.$transaction(async (prisma) => {
            const user = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    role: 'STUDENT',
                    student: {
                        create: {
                            name,
                            university,
                            course,
                            phone,
                            bio: 'null',
                        }
                    }
                },
                include: {
                    student: true
                }
            });

            return user;
        });

        // Remove password from the response
        const { password: _, ...userWithoutPassword } = newUser;
        let message = `Welcome ${userWithoutPassword.student.name}!`;

        return new Response(JSON.stringify({ message: message, user: userWithoutPassword }), { status: 201 });
    } catch (e) {
        console.error(e);
        let message = e.message;
        return new Response(JSON.stringify({ message: message, error: 'Failed to create user' }), { status: 500 });
    }
}
