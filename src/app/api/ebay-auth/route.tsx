import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: Request) {
	const tokens = await prisma.token.findMany()
	return new Response(JSON.stringify(tokens))
}

