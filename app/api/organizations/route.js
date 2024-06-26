import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req, res) {
    try {
        const organizations = await prisma.organization.findMany(
            {
                include: {
                    departments: true,
                    services: true
                }
            }
        );
        return new Response(JSON.stringify(organizations), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch organizations' }), { status: 500 });
    }
}

export async function POST(req, res){
    try{
        const data = await req.json();

        const { name, logo, banner, website, employees, email, address, contactInfo, departments, services } = data;

        if (!name || !email || !address || !contactInfo) {
            return new Response(JSON.stringify({ error: 'Name, email, address, and contactInfo are required' }), { status: 400 });
        }

        const newOrganization = await prisma.organization.create({
            data: { name, logo, banner, website, employees, email, address, contactInfo,
                departments: {
                    create: departments.map(dept => ({
                        name: dept.name
                    }))
                },
                services: {
                    create: services.map(service => ({
                        name: service.name,
                        icon: service.icon
                    }))
                }
            }
        });

        return new Response(JSON.stringify(newOrganization), { status: 201 });
    } catch (e) {
        console.log(e)
        return new Response(JSON.stringify(
            {
                error: 'Failed to create an organization'
            }
        ), { status: 500 });
    }
}
