import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const EbayAuthToken = require('ebay-oauth-nodejs-client');

const ebayAuthToken = new EbayAuthToken({
	clientId: 'ToddGrif-pcpartse-SBX-3ce10d55a-5677622d',
	clientSecret: 'SBX-ce10d55a39a2-30e5-40a6-946f-6f6b',
	// redirectUri: '<redirect uri>'
});

export async function GET(request: Request) {

	// try {
	// 	const token = await ebayAuthToken.getApplicationToken('PRODUCTION');
	// 	console.log(token);
	// } catch (error) {
	// 	console.log(error);
	// }
	//

	// Get 

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

