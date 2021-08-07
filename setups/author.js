import yaml from 'js-yaml'
import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const doc = yaml.loadAll(fs.readFileSync(path.resolve(__dirname, 'authors', 'authors.yml')))

const authors = []

for(const author in doc[0]) {
    authors.push(doc[0][author])
}

export default authors