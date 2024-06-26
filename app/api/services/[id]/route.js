import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req, { params }) {
    const { id } = params;

    try {
        const service = await prisma.service.findUnique({
            where: { id: parseInt(id) },
            include: {
                organization: true
            }
        });

        if (!service) {
            return new Response(JSON.stringify({ error: 'Service not found' }), { status: 404 });
        }

        return new Response(JSON.stringify(service), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch service' }), { status: 500 });
    }
}

export async function PUT(req, { params }) {
    const { id } = params
    const data = await req.json()

    try {
        const updatedService = await prisma.service.update({
            where: { id: parseInt(id) },
            data
        });

        return new Response(JSON.stringify(updatedService), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to update service' }), { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    const { id } = params;

    try {
        await prisma.service.delete({
            where: { id: parseInt(id) }
        });

        return new Response(JSON.stringify({ message: 'Service deleted successfully' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to delete service' }), { status: 500 });
    }
}
