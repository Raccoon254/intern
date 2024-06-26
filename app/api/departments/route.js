import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req, res) {
    try {
        const users = await prisma.department.findMany();
        return new Response(JSON.stringify(users), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch users' }), { status: 500 });
    }
}

export async function POST(req, res){
    try{
        const { name, organizationId } = await req.json();
        const department = await prisma.department.create({
            data: {
                name,
                organizationId
            }
        });
        return new Response(JSON.stringify(department), { status: 200 });
    }catch (error){
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to create department' }), { status: 500 });
    }
}
