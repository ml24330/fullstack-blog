import fm from 'front-matter'
import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import yaml from 'js-yaml'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const files = fs.readdirSync(path.resolve(__dirname, 'posts'))

const posts = []

files.forEach(file => {
    const data = fs.readFileSync(path.resolve(__dirname, 'posts', file), 'utf8')
    const content = fm(data)

    const {title, author, authors, categories} = yaml.load(content.frontmatter)
    const body = content.body
    const date = new Date(file.slice(0,10))
    const slug = file.slice(11,-3)

    const document = {slug, title, author, authors, categories, body, date}

    posts.push(document)
})

export default posts