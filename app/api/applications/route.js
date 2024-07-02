import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(req, res){
    try {
        const applications =  await prisma.application.findMany(
            {
                include: {
                    student: true,
                    jobPosting: true
                }
            }
        )
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({ error: 'Failed to fetch applications' }), { status: 500 })
    }
}