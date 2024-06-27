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
                department: {
                    include: {
                        organization: true
                    }
                }
            }
        });

        const response = internships.map(internship => ({
            id: internship.id,
            title: internship.title,
            description: internship.description,
            requirements: internship.requirements,
            type: internship.type,
            location: internship.location,
            applicationDeadline: internship.applicationDeadline,
            createdAt: internship.createdAt,
            updatedAt: internship.updatedAt,
            department: {
                id: internship.department.id,
                name: internship.department.name,
                description: internship.department.description,
                organization: {
                    id: internship.department.organization.id,
                    name: internship.department.organization.name,
                    logo: internship.department.organization.logo,
                    email: internship.department.organization.email,
                    address: internship.department.organization.address,
                    contactInfo: internship.department.organization.contactInfo
                }
            }
        }));

        return new Response(JSON.stringify(response), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to fetch internships' }), { status: 500 });
    }
}
