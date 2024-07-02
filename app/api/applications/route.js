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
        return new Response(JSON.stringify(applications), { status: 200 })
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({ error: 'Failed to fetch applications' }), { status: 500 })
    }
}

export async function POST(req, res){
    try{

        const { coverLetter, resume, studentId, jobPostingId } = await req.json()
        if ( !coverLetter || !resume || !studentId || !jobPostingId ) {
            return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 })
        }

        const application = await prisma.application.create({
            data: {
                coverLetter,
                resume,
                status: 'PENDING',
                studentId,
                jobPostingId
            }
        })

        return new Response(JSON.stringify(application), { status: 200 })
    }catch(error){
        console.log(error)
        return new Response(JSON.stringify({ error: 'Failed to create application \n' + error }), { status: 500 })
    }
}