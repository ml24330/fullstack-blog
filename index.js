import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import { authorsRouter, postsRouter, postRouter, visitsRouter, visitorRouter, imagesRouter } from './routers.js'
import UArouter from './UArouter.js'

dotenv.config()
const PORT = process.env.PORT || 5000

mongoose.set('useFindAndModify', false)
mongoose.connect(`mongodb+srv://lse:${process.env.DB_PASSWORD}@lselr.kea2z.mongodb.net/LSELR?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection error:'))
db.once('open', () => console.log('Connection established'))

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/authors', authorsRouter)
app.use('/api/posts', postsRouter)
app.use('/api/post', postRouter)
app.use('/api/visits', visitsRouter)
app.use('/api/visitor', visitorRouter)
app.use('/api/images', imagesRouter)

app.use(function(req,res,next) {
    const ua = req.headers['user-agent']

    if (/^(facebookexternalhit)|(Twitterbot)|(TelegramBot)|(WhatsApp)|(LinkedInBot)/gi.test(ua)) {
      console.log(ua,' is a bot')
      UArouter(req, res, next)
    } else {
      next()
    }
})

app.set('view engine', 'ejs')

app.get('/sitemap', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'sitemap.xml'))
})

app.get('/file/:name', (req, res) => {
    const file = path.join(__dirname, 'public', req.params.name)
    if(fs.existsSync(file)) {
        res.download(file)
    } else {
        res.status(404).send('File does not exist!')
    }
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}

if(process.env.NODE_ENV === 'development'){
    app.use(express.static(path.resolve(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => console.log(`Started listening on port ${PORT}`))

