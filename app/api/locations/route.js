import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req, res) {
    try {
        const locations = await prisma.location.findMany(
            {
                include: {
                    organization: true,
                }
            }
        )
        return new Response(JSON.stringify(locations), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch locations' }), { status: 500 })
    }
}

export async function POST(req, res) {
    try{
        const { name, address, city, state, zip, country, contactInfo, organizationId, description } = await req.json()
        if ( !name || !organizationId || !description ) {
            return new Response(JSON.stringify({ error: 'Name and organizationId are required' }), { status: 400 })
        }
        const location = await prisma.location.create({
            data: {
                name,
                address,
                city,
                state,
                zip,
                country,
                contactInfo,
                organizationId,
                description
            }
        })
        return new Response(JSON.stringify(location), { status: 200 })
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({ error: 'Failed to create location \n' + error }), { status: 500 })
    }
}
