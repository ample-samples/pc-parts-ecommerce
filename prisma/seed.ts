import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: Request) {

	const tokens = await prisma.token.findMany()
		.then(async (res) => {
			console.error("connected successfully")
			await prisma.$disconnect()
			console.error("disconnected successfully")
			return res
		})
		.catch(async (e) => {
			console.error(e)
			await prisma.$disconnect()
			process.exit(1)
		})
	return new Response(JSON.stringify(tokens))
}

