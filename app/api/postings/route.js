import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
    try {
        const postings = await prisma.jobPosting.findMany();
        return new Response(JSON.stringify(postings), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to fetch jobs' }), { status: 500 });
    }
}

export async function POST(req) {
    try {
        const data = await req.json();
        const { title, description, requirements, type, location, applicationDeadline, departmentId } = data;

        if (!title || !description || !requirements || !type || !location || !applicationDeadline || !departmentId) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
        }

        const job = await prisma.jobPosting.create({
            data: {
                title,
                description,
                requirements,
                type,
                location,
                applicationDeadline: new Date(applicationDeadline), // Ensure date is properly formatted
                departmentId
            }
        });

        return new Response(JSON.stringify(job), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to create a job' }), { status: 500 });
    }
}
