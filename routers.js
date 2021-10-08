import express from 'express'
import dotenv from 'dotenv'
import readingTime from 'reading-time'
import removeMd from 'remove-markdown'

import { Post, Author, Visit, Visitor, Image } from './models.js'

dotenv.config()

const postsRouter = express.Router()
const postRouter = express.Router()
const authorsRouter = express.Router()
const visitsRouter = express.Router()
const visitorRouter = express.Router()
const imagesRouter = express.Router()


/*
    The /posts router
*/

// READ all posts
postsRouter.get('/', async (req, res) => {
    try {
        const posts = await Post.aggregate([{$project: {
            title: 1,
            slug: 1,
            author: 1,
            authors: 1,
            date: 1,
            categories: 1,
            content: { $substrCP: ['$content', 0, 1100] },
            length: { $strLenCP: '$content' }
        }}])
        return res.json(posts)
    } catch(e) {
        console.log(`Error while indexing posts: ${e}`)
        return res.status(404).json('An error has occurred!')
    }
})

// READ posts containing search query
postsRouter.get('/search/:query(*)', async (req, res) => {
    const query = req.params.query.replace(/[^\w\s]/gi, '')
    try {
        if(!query) {
            throw new Error('Invalid query string!')
        }
        const posts = await Post.aggregate([
            { $match: { 
                '$or': [
                    { title: { '$regex': query, '$options': 'i' } },
                    { author: { '$regex': query, '$options': 'i' } },
                    { authors: { '$regex': query, '$options': 'i' } },
                    { categories: { '$regex': query, '$options': 'i' } },
                    { content: { '$regex': query, '$options': 'i' } },
                    { title: { '$regex': query, '$options': 'i' } }
                ]
            } },
            { $project: {
                title: 1,
                slug: 1,
                author: 1,
                authors: 1,
                date: 1,
                categories: 1,
                content: { $substrCP: ['$content', 0, 300] },
                length: { $strLenCP: '$content' }
            }}
        ])
        console.log(posts)
        // const posts = await Post.find({ $or: [
        //     { title: { '$regex': query, '$options': 'i' } },
        //     { author: { '$regex': query, '$options': 'i' } },
        //     { authors: { '$regex': query, '$options': 'i' } },
        //     { categories: { '$regex': query, '$options': 'i' } },
        //     { content: { '$regex': query, '$options': 'i' } },
        //     { title: { '$regex': query, '$options': 'i' } }
        // ] })
        return res.json(posts)
    } catch(e) {
        console.log(`Error while searching posts using query ${req.params.query}: ${e}`)
        return res.status(400).json('An error has occurred!')
    }
})

// READ posts by category
postsRouter.get('/:category', async (req, res) => {
    try {
        const posts = await Post.find({ categories: req.params.category })
        if(posts.length === 0) {
            throw new Error('No posts found!')
        }
        return res.json(posts)
    } catch(e) {
        console.log(`Error while indexing posts by category: ${e}`)
        return res.status(404).json('An error has occurred!')
    }
})


/*
    The /post router
*/

// READ one post by ID
postRouter.get('/id/:id', async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id })
        if(!post) {
            throw new Error('No documents found!')
        }
        res.json(post)
    } catch(e) {
        console.log(`Error while indexing post: ${e}`)
        return res.status(404).json('An error has occurred!')
    } 
})


// READ one post by slug
postRouter.get('/slug/:slug', async (req, res) => {
    try {
        const post = await Post.findOne({ slug: req.params.slug })
        if(!post) {
            throw new Error('No documents found!')
        }
        res.json(post)
    } catch(e) {
        console.log(`Error while indexing post: ${e}`)
        return res.status(404).json('An error has occurred!')
    } 
})


/*
    The /authors router
*/

// READ all authors
authorsRouter.get('/', async (req, res) => {
    try {
        const authors = await Author.find()
        res.json(authors)
    } catch(e) {
        console.log(`Error while indexing authors: ${e}`)
        return res.status(404).json('An error has occurred!')
    }    
})

// READ one author
authorsRouter.get('/:name', async (req, res) => {
    let author

    try {
        author = await Author.findOne({ name: req.params.name })
        if(!author) {
            throw new Error('No documents found!')
        }
    } catch(e) {
        console.log(`Error while indexing author: ${e}`)
        return res.status(404).json('An error has occurred!')
    }

    let posts = []

    try {
        posts = await Post.find({ $or:[{author: req.params.name},{authors: req.params.name}] })
        if(!posts) {
            throw new Error('No documents found!')
        }
    } catch(e) {
        console.log(`Error while indexing posts: ${e}`)
        return res.status(404).json('An error has occurred!')
    }

    res.json({...JSON.parse(JSON.stringify(author)), posts})
})


/*
    The /visits router
*/

// CREATE one new visit ID
visitsRouter.post('/:id', async (req, res) => {
    const visit = new Visit({
        id: req.params.id,
        visits: 0
    })
    try {
        const find = await Visit.findOne({ id: req.params.id })
        if(find) {
            throw new Error(`Item with id ${req.params.id} already exists!`)
        }
        const doc = await visit.save()
        return res.json(doc)
    } catch(e) {
        console.log(`Error while saving visit: ${e}`)
        return res.status(400).json('An error has occurred!')
    }
})

// READ all visits data
visitsRouter.get('/', async (req, res) => {
    try {
        const visits = await Visit.find()
        res.json(visits)
    } catch(e) {
        console.log(`Error while indexing visits: ${e}`)
        return res.status(404).json('An error has occurred!')
    }
})

// READ one visit data by ID
visitsRouter.get('/:id', async (req, res) => {
    try {
        const visit = await Visit.findOne({ id: req.params.id })
        if(!visit) {
            throw new Error('No documents found!')
        }
        res.json(visit)
    } catch(e) {
        console.log(`Error while indexing visit data: ${e}`)
        return res.status(404).json('An error has occurred!')
    }    
})

// INCREMENT one visit data
visitsRouter.patch('/inc/:id', async (req, res) => {
    try {
        const doc = await Visit.findOneAndUpdate({ id: req.params.id }, { $inc: { visits: 1 } }, { new: true })
        if(!doc) {
            throw new Error('No documents found!')
        }
        return res.json(doc)
    } catch(e) {
        console.log(`Error while incrementing visit data: ${e}`)
        return res.status(404).json('An error has occurred!')
    }
})

/*
    The /visitor router
*/

// CREATE new visitor record
visitorRouter.post('/', async (req, res) => {
    try {
        const visitor = new Visitor({
            time: Date.now(),
            location: req.body.location,
            entry: req.body.entry
        })
        const doc = await visitor.save()
        return res.json(doc)
    } catch(e) {
        console.log(`Error while recording visitor location: ${e}`)
        return res.status(404).json('An error has occurred!')
    }
})

/*
    The /images router
*/

// READ one post image caption by slug
imagesRouter.get('/caption/:slug', async (req, res) => {
    try {
        const img = await Image.findOne({ slug: req.params.slug })
        if(!img) {
            throw new Error('No documents found!')
        }
        const caption = img.caption
        res.json({caption})
    } catch(e) {
        console.log(`Error while indexing image caption: ${e}`)
        return res.status(400).json('An error has occurred!')
    }
})

// READ one post image by slug
imagesRouter.get('/post/:slug', async (req, res) => {
    try {
        const img = await Image.findOne({slug: req.params.slug})
        if(!img) {
            throw new Error('No documents found!')
        }
        return res.json(img)
    } catch(e) {
        console.log(`Error while indexing image: ${e}`)
        return res.status(400).json('An error has occurred!')
    }
})

// READ one author image by slug
imagesRouter.get('/author/:name', async (req, res) => {
    try {
        const aut = await Author.findOne({ name: req.params.name })
        if(!aut.image || !aut.image.data) {
            throw new Error('No documents found!')
        }
        const data = Buffer.from(aut.image.data, 'base64');
        res.end(data)
    } catch(e) {
        console.log(`Error while indexing image: ${e}`)
        return res.status(400).json('An error has occurred!')
    }
})

export { postsRouter, postRouter, authorsRouter, visitsRouter, visitorRouter, imagesRouter }

