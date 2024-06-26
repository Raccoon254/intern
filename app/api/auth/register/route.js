// POST
import {PrismaClient} from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req, res) {
    try{
        const data = await req.json();
        console.log(data)
        /*
        {
          name: 'Steve Tom',
          email: 'tomsteve187@gmail.com',
          university: 'Chuka University',
          course: 'Computer science',
          phone: '254758481320',
          password: '12345678'
        }
         */

        const {name, email, university, course, phone, password} = data;
        //validate the data
        if (!name || !email || !university || !course || !phone || !password) {
            return new Response(JSON.stringify({error: 'All fields are required'}), {status: 400});
        }
        if (password.length < 8) {
            return new Response(JSON.stringify({error: 'Password must be atleast 8 characters'}), {status: 400});
        }
        const phoneRegex = /^[0-9]{12}$/;
        if (!phone.match(phoneRegex)) {
            return new Response(JSON.stringify({error: 'Invalid phone number'}), {status: 400});
        }
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email.match(emailRegex)) {
            return new Response(JSON.stringify({error: 'Invalid email'}), {status: 400});
        }
        //hash the password
        const hashedPassword = await bcrypt.hash(password, 10)
        const role = 'STUDENT'

        const student = {
            name,
            university,
            course,
            phone
        }

        const newUser = await prisma.user.create(
            {
                data: {
                    email,
                    password: hashedPassword,
                    role,
                    student: student ? {
                        create: student
                    } : undefined,
                },
            }
        );

        return new Response(JSON.stringify(newUser), {status: 201});
    }catch (e){
        console.log(e)
        return new Response(JSON.stringify({error: 'Failed to create user'}), {status: 500});
    }
}
