import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
   try {
      const id = params.id;
      const application = await prisma.application.findUnique({
         where: {
            id: parseInt(id),
         },
         include: {
            student: true,
            jobPosting: true,
         },
      });
      
      return new Response(JSON.stringify(application), { status: 200 });
   } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: "Failed to fetch application" }), { status: 500 });
   }
}


async function PUT(req, { params }) {
   try {
      const id = params
      const data = await req.json()

      const updatedApplication = await prisma.application.update({
         where: { id: parseInt(id) },
         data
      })

      return new Response(JSON.stringify({ updatedApplication }), { status: 200 })
   } catch (error) {
      console.log(error)
      return new Response(JSON.stringify({ error: "Failed to edit an application "+ error }), { status: 500 })
   }
}

export async function DELETE(req, { params }){
   const id = params

   try {
      await prisma.application.delete({
         where: {id: parseInt(id)}
      })
   } catch (error) {
      console.log(error)
      return new Response(JSON.stringify({ error: 'Failed to delete application'}), { status: 500 })
   }
}