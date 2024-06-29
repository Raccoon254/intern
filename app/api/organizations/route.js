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

        const { name, logo, banner, website, employees, email, address, contactInfo,bio, departments, services, locations } = data;

        if (!name || !email || !address || !contactInfo) {
            return new Response(JSON.stringify({ error: 'Name, email, address, and contactInfo are required' }), { status: 400 });
        }

        const newOrganization = await prisma.organization.create({
            data: { name, logo, banner, website, employees, email, address, contactInfo, bio,
                departments: {
                    create: departments.map(dept => ({
                        name: dept.name,
                        description: dept.description
                    }))
                },
                services: {
                    create: services.map(service => ({
                        name: service.name,
                        icon: service.icon,
                        description: service.description
                    }))
                },
                locations: {
                    create: locations.map(location => ({
                        name: location.name,
                        address: location.address,
                        city: location.city,
                        state: location.state,
                        zip: location.zip,
                        country: location.country,
                        description: location.description,
                        contactInfo: location.contactInfo
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
