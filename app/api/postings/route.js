import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
    try {
        const postings = await prisma.jobPosting.findMany({
            include: {
                department: {
                    include: {
                        organization: true
                    }
                }
            }
        });

        const response = postings.map(posting => ({
            id: posting.id,
            title: posting.title,
            description: posting.description,
            requirements: posting.requirements,
            type: posting.type,
            location: posting.location,
            applicationDeadline: posting.applicationDeadline,
            createdAt: posting.createdAt,
            updatedAt: posting.updatedAt,
            department: {
                id: posting.department.id,
                name: posting.department.name,
                description: posting.department.description,
                organization: {
                    id: posting.department.organization.id,
                    name: posting.department.organization.name,
                    logo: posting.department.organization.logo,
                    email: posting.department.organization.email,
                    address: posting.department.organization.address,
                    contactInfo: posting.department.organization.contactInfo
                }
            }
        }));

        return new Response(JSON.stringify(response), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to fetch jobs' }), { status: 500 });
    }
}

export async function POST(req) {
    try {
        const data = await req.json();
        //console.log(data);
        const { title, description, requirements, type, location, skills, applicationDeadline, departmentId } = data;

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
                skills: {
                    create: skills.map(skill => ({
                        name: skill.name,
                        description: skill.description,
                        icon: skill.icon
                    }))
                },
                status: 'PENDING',
                applicationDeadline: new Date(applicationDeadline), // Ensure date is properly formatted
                departmentId
            }
        });

        return new Response(JSON.stringify(job), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to create a job '+ error }), { status: 500 });
    }
}
