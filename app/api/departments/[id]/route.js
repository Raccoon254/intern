import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req, { params }) {
    const { id } = params

    try {
        const department = await prisma.department.findUnique({
            where: { id: parseInt(id) },
            include: {
                organization: true,
                jobPostings: true
            }
        });

        if (!department) {
            return new Response(JSON.stringify({ error: 'Department not found' }), { status: 404 });
        }

        return new Response(JSON.stringify(department), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch department' }), { status: 500 });
    }
}

export async function PUT(req, { params }) {
    const { id } = params
    const data = await req.json();

    try {
        const updatedDepartment = await prisma.department.update({
            where: { id: parseInt(id) },
            data
        });

        return new Response(JSON.stringify(updatedDepartment), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to update department' }), { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    const { id } = params

    try {
        await prisma.department.delete({
            where: { id: parseInt(id) }
        });

        return new Response(JSON.stringify({ message: 'Department deleted successfully' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to delete department' }), { status: 500 });
    }
}
