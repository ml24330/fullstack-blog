import yaml from 'js-yaml'
import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const doc = yaml.loadAll(fs.readFileSync(path.resolve(__dirname, 'authors', 'authors.yml')))

const authors = []

for(const name in doc[0]) {
    const PATH = path.resolve(__dirname, 'authors', `${name.replace(/ /g,'').toLowerCase()}.jpg`)
    let data
    if(fs.existsSync(PATH)) {
        data = fs.readFileSync(PATH)
    }
    const image = {
        data,
        contentType: 'image/png'
    }
    const author = {...doc[0][name], image}
    authors.push(author)
}

export default authors