import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req, res) {
    try {
        const services = await prisma.service.findMany(
            {
                include: {
                    organization: true,
                }
            }
        );
        return new Response(JSON.stringify(services), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch users' }), { status: 500 });
    }
}

export async function POST(req, res) {
    try{
        const { name, icon, organizationId, description } = await req.json();
        const service = await prisma.service.create({
            data: {
                name,
                icon,
                organizationId,
                description
            }
        });
        return new Response(JSON.stringify(service), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to create service' }), { status: 500 });
    }
}
