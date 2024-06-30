import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req, { params }) {
    const { id } = params

    try {
        const location = await prisma.location.findUnique({
            where: { id: parseInt(id) },
            include: {
                organization: true
            }
        })

        if (!location) {
            return new Response(JSON.stringify({ error: 'Location not found' }), { status: 404 })
        }

        return new Response(JSON.stringify(location), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch location' }), { status: 500 })
    }
}

export async function PUT(req, { params }) {
    const { id } = params
    const data = await req.json()

    try {
        const updatedLocation = await prisma.location.update({
            where: { id: parseInt(id) },
            data
        })

        return new Response(JSON.stringify(updatedLocation), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to update location' }), { status: 500 })
    }
}

export async function DELETE(req, { params }) {
    const { id } = params

    try {
        await prisma.location.delete({
            where: { id: parseInt(id) }
        })

        return new Response(JSON.stringify({ message: 'Location deleted successfully' }), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to delete location' }), { status: 500 })
    }
}
