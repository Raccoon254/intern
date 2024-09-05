import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req, { params }) {
    try {
        const { organizationId } = params;

        const internships = await prisma.jobPosting.findMany({
            where: {
                type: 'INTERNSHIP',
                department: {
                    organizationId: parseInt(organizationId)
                }
            },
            include: {
                skills: true,
                department: {
                    include: {
                        organization: true,
                    }
                }
            }
        });

        return new Response(JSON.stringify(internships), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to fetch internships' }), { status: 500 });
    }
}
