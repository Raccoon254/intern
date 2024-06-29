import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req, { params }) {
    const { id } = params;

    try {
        const organization = await prisma.organization.findUnique({
            where: { id: parseInt(id) },
            include: {
                departments: true,
                services: true,
                locations: true
            }
        });

        if (!organization) {
            return new Response(JSON.stringify({ error: 'Organization not found' }), { status: 404 });
        }

        return new Response(JSON.stringify(organization), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch organization' }), { status: 500 });
    }
}

export async function PUT(req, { params }) {
    const { id } = params;
    const data = await req.json();

    try {
        const updatedOrganization = await prisma.organization.update({
            where: { id: parseInt(id) },
            data
        });
        return new Response(JSON.stringify(updatedOrganization), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to update organization' }), { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    const { id } = params;

    try {
        await prisma.organization.delete({
            where: { id: parseInt(id) }
        });

        return new Response(JSON.stringify({ message: 'Organization deleted successfully' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to delete organization' }), { status: 500 });
    }
}
