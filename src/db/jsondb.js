import fs from 'fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { get } from 'lodash'
import set from 'lodash/fp/set'
const __dirname = dirname(fileURLToPath(import.meta.url))
const initObject = { data: { user: [] } }
const file = join(__dirname, 'test.json')
if (!fs.existsSync(file)) {
	fs.writeFileSync(file, JSON.stringify(initObject))
}
export const readFile = async (selector = []) => {
	const jsonString = fs.readFileSync(file, 'utf8')
	const jsonData = JSON.parse(jsonString)
	const result = get(jsonData, ['data', ...selector])
	return result
}

export const writeFile = async (data, selector = []) => {
	const currentData = await readFile()
	const _data = set([...selector], data, currentData)
	fs.writeFileSync(file, JSON.stringify({ data: _data }), 'utf-8')
}
