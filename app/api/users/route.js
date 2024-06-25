import { PrismaClient } from '@prisma/client'
import cors from "@/app/api/middlware/cors";

const prisma = new PrismaClient()

export default async function handler(req, res) {
    await cors(req, res)
    if (req.method === 'GET') {
        // Get all users
        const users = await prisma.user.findMany()
        if (users.length === 0) {
            res.status(200).json({ message: 'No users found' })
        } else {
            res.status(200).json(users)
        }
    } else if (req.method === 'POST') {
        // Create a new user
        const { email, password, role } = req.body
        try {
            const user = await prisma.user.create({
                data: { email, password, role },
            })
            res.status(201).json(user)
        } catch (error) {
            res.status(500).json({ message: 'Error creating user', error: error.message })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}
