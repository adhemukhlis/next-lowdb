import { db } from '@/db/lowdbService'

const mock = async (req, res) => {
	switch (req.method) {
		case 'GET': {
			await db.read()
			const { data } = db.data
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
