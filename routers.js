import express from 'express'
import dotenv from 'dotenv'
import sw from 'stopword'

import { Post, Author, Visit } from './models.js'

dotenv.config()

const postsRouter = express.Router()
const postRouter = express.Router()
const authorsRouter = express.Router()
const visitsRouter = express.Router()

const slugify = (string) => {
    return sw.removeStopwords(string.split(' ')).join(' ').toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
    console.log(slug)
}


/*
    Authentication middleware
*/

const authMiddleware = (req, res, next) => {
    try {
        if(req.body.token === process.env.TOKEN) {
            next()
        } else {
            res.status(401).json('Authentication failed!')
        }
    } catch(e) {
        console.log(`Error while authenticating client: ${e}`)
        return res.status(400).json('An error has occurred!')
    }
}


/*
    The /posts router
*/

// CREATE one new post
postsRouter.post('/', authMiddleware, async (req, res) => {
    try {
        const { title, author, authors, categories, body, date } = req.body
        if(!title || !categories || !body || !date || (!author && !authors)) {
            throw new Error('Missing fields!')
        }
        const slug = slugify(title)
        const post = new Post({
            slug,
            title,
            author,
            authors,
            categories,
            body,
            date
        })
        await post.save()
        return res.json(post)
    } catch(e) {
        console.log(`Error while creating new post: ${e}`)
        return res.status(400).json('An error has occurred!')
    }
})

// READ all posts
postsRouter.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        return res.json(posts)
    } catch(e) {
        console.log(`Error while indexing posts: ${e}`)
        return res.status(404).json('An error has occurred!')
    }
})

// READ posts containing search query
postsRouter.get('/search/:query', async (req, res) => {
    const query = req.params.query.replace(/[^\w\s]/gi, '')
    try {
        if(!query) {
            throw new Error('Invalid query string!')
        }
        const posts = await Post.find({ $or: [
            { title: { '$regex': query, '$options': 'i' } },
            { author: { '$regex': query, '$options': 'i' } },
            { authors: { '$regex': query, '$options': 'i' } },
            { categories: { '$regex': query, '$options': 'i' } },
            { content: { '$regex': query, '$options': 'i' } },
            { title: { '$regex': query, '$options': 'i' } }
        ] })
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

// UPDATE one post
postsRouter.patch('/:id', authMiddleware, async (req, res) => {
    try {
        const { title, author, authors, categories, body, date } = req.body
        if(!title || !categories || !body || !date || (!author && !authors)) {
            throw new Error('Missing fields!')
        }
        const post = {
            title,
            author,
            authors,
            categories,
            body,
            date
        }
        const doc = await Post.findOneAndUpdate({ _id: req.params.id }, post, { new: true })
        return res.json(doc)
    } catch(e) {
        console.log(`Error while updating post: ${e}`)
        return res.status(400).json('An error has occurred!')
    }
})

// DELETE one post
postsRouter.delete('/:id', authMiddleware, async (req, res) => {
    try {
        await Post.findOneAndDelete({ _id: req.params.id })
        return res.status(204).send()
    } catch(e) {
        console.log(`Error while deleting post: ${e}`)
        return res.status(400).json('An error has occurred!')
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

// CREATE one new author
authorsRouter.post('/', authMiddleware, async (req, res) => {
    try {
        const { name, bio, category } = req.body
        if(!name || !bio || !category) {
            throw new Error('Missing fields!')
        }
        const author = new Author({
            name,
            bio,
            category
        })
        await author.save()
        return res.json(author)
    } catch(e) {
        console.log(`Error while creating new author: ${e}`)
        return res.status(400).json('An error has occurred!')
    }
})

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

// UPDATE one author
authorsRouter.patch('/:name', authMiddleware, async (req, res) => {
    try {
        const { name, bio, category } = req.body
        if(!name || !bio || !category) {
            throw new Error('Missing fields!')
        }
        const author = {
            name,
            bio,
            category
        }
        const doc = await Author.findOneAndUpdate({ name: req.params.name }, author, { new: true })
        return res.json(doc)
    } catch(e) {
        console.log(`Error while updating author: ${e}`)
        return res.status(400).json('An error has occurred!')
    }
})

// DELETE one author
authorsRouter.delete('/:name', authMiddleware, async (req, res) => {
    try {
        await Author.findOneAndDelete({ name: req.params.name })
        return res.status(204).send()
    } catch(e) {
        console.log(`Error while deleting author: ${e}`)
        return res.status(400).json('An error has occurred!')
    }
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

// UPDATE one visit data
visitsRouter.patch('/:id', async (req, res) => {
    try {
        const { type, value } = req.body
        if(!type || !value) {
            throw new Error('Missing fields!')
        }
        let doc
        switch(type) {
            case 'set':
                doc = await Visit.findOneAndUpdate({ id: req.params.id }, { visits: value }, { new: true })
                if(!doc) {
                    throw new Error('No documents found!')
                }
                return res.json(doc)
            case 'change':
                doc = await Visit.findOneAndUpdate({ id: req.params.id }, { $inc: { visits: value } }, { new: true })
                if(!doc) {
                    throw new Error('No documents found!')
                }
                return res.json(doc)
            default:
                throw new Error('Invalid operation type!')
        }
    } catch(e) {
        console.log(`Error while updating visit data: ${e}`)
        return res.status(404).json('An error has occurred!')
    }
})

// DELETE one visit data
visitsRouter.delete('/:id', authMiddleware, async (req, res) => {
    try {
        await Visit.findOneAndDelete({ id: req.params.id })
        return res.status(204).send()
    } catch(e) {
        console.log(`Error while deleting visit data: ${e}`)
        return res.status(400).json('An error has occurred!')
    }
})

export { postsRouter, postRouter, authorsRouter, visitsRouter }