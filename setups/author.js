import yaml from 'js-yaml'
import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const doc = yaml.loadAll(fs.readFileSync(path.resolve(__dirname, 'authors', 'authors.yml')))

const authors = []

fs.readFile(path.resolve(__dirname, 'authors', 'austinchan.jpg'), function(err, data) {
    if (err) throw err;
    
    // Encode to base64
    var encodedImage = new Buffer.from(data, 'binary').toString('base64');
  
    // Decode from base64
    var decodedImage = new Buffer.from(encodedImage, 'base64').toString('binary');
  });

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