import mongoose from 'mongoose'
import posts from './post.js'
import authors from './author.js'

import { Post, Author, Visit } from '../models.js'
mongoose.connect(`mongodb+srv://root:${'root'}@cluster0.swmsg.mongodb.net/lselawreview?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', async () => {
    console.log('Connection established')
    main()
})

const main = async () => {

    try {
        await Post.collection.drop()
        console.log('Posts collection dropped')
        await Author.collection.drop()
        console.log('Authors collection dropped')
    } catch(e) {
        console.log(`Error occurred while dropping collection: ${e}`)
    }

    for (const [idx, { slug, title, author, authors, categories, body: content, date }] of posts.entries()) {
        const post = new Post({
            slug,
            author,
            authors,
            date,
            title,
            content,
            categories
        })
    
        await post.save()
        
        const doc = await Visit.findOne({ id: slug })
        if(!doc) {
            const visit = new Visit({
                id: slug,
                visits: 0
            })
            await visit.save()
        }
        console.log(`Saved ${idx+1}/${posts.length} posts...`)
    }
    
    for (const [idx, { name, bio, category }] of authors.entries()) {
        const author = new Author({
            name,
            bio,
            category
        })

        await author.save()
        console.log(`Saved ${idx+1}/${authors.length} authors...`)
    }

    await Post.find().then(posts => console.log(`${posts.length} posts are now in collection`))
    await Author.find().then(authors => console.log(`${authors.length} authors are now in collection`))

    db.close()
    console.log('Operations completed')
}
