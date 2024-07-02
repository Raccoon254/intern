import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(req, {params}){
    const id = params.id
    try {
        const posting = await prisma.jobPosting.findUnique({
            where: { id: parseInt(id) },
            include: {
                department: {
                    include: {
                        organization: true
                    }
                }
            }
        })

        return new Response(JSON.stringify(posting), {status: 200})
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ error: 'Could not fetch a posting '+ error}), {status: 500})
    }
}