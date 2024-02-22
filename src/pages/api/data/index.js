// import globalStore from "@/db/globalStore"
// import { readFile } from '@/db/jsondb'
const fs = require("fs");

const mock = async (req, res) => {
	switch (req.method) {
		case 'GET': {
			// const data = globalStore.get('data')
			// const data = await readFile()
			const data = fs.readdirSync('/vercel/path0/src/db');
			return res.status(200).json({
				message: `get data success!`,
				data
			})
		}
		default: {
			return res.status(405).send({ message: 'Method not allowed' })
		}
	}
}
export default mock
