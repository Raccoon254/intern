import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req, { params }) {
    try {
        
        const { id } = params

        if (!id) {
            return new Response(JSON.stringify({ error: 'ID is required' }), { status: 400 })
        }

        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(id),
            },
        })
        return new Response(JSON.stringify(user), { status: 200 })
        
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ error: 'Failed to fetch user' }), { status: 500 })
    }
}