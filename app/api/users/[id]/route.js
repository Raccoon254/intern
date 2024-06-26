import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { id } = req.query

    if (req.method === 'GET') {
        // Get a single user
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) },
        })
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ message: 'User not found' })
        }
    } else if (req.method === 'PUT') {
        // Update a user
        const { email, password, role } = req.body
        const user = await prisma.user.update({
            where: { id: parseInt(id) },
            data: { email, password, role },
        })
        res.status(200).json(user)
    } else if (req.method === 'DELETE') {
        // Delete a user
        await prisma.user.delete({
            where: { id: parseInt(id) },
        })
        res.status(204).end()
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}
