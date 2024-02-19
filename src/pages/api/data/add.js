import globalStore from '@/db/globalStore'

const mock = async (req, res) => {
	const { name } = req.query
	switch (req.method) {
		case 'GET': {
			const data = globalStore.get('data')
			if (data.filter((d) => d.name === name).length < 1) {
				globalStore.set('data', [...data, { name }])
				return res.status(201).json({
					message: `${name} added successfully!`,
					data: {
						name
					}
				})
			} else {
				return res.status(409).send({ message: 'Already Exists', errors: [`data ${name} sudah ada!`] })
			}
		}
		default: {
			return res.status(405).send({ message: 'Method not allowed' })
		}
	}
}
export default mock
