require('babel-register')({ presets: ['es2015', 'react'] });
const router = require('./client/sitemap-routes.js').default;
const Sitemap = require('react-router-sitemap').default;
const mongoose = require('mongoose');
require('dotenv').config()

const { Post, Author, Visit, Visitor } = require('./models.js');

mongoose.connect(`mongodb+srv://lse:${process.env.DB_PASSWORD}@lselr.kea2z.mongodb.net/LSELR?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', async () => {
    console.log('Connection established')
    generateSitemap()
});
 
async function generateSitemap() {
    const authors = await Author.find({})
    const nameMap = authors.map(author => ({name: author.name}) )

    const posts = await Post.find({})
    const postMap = posts.map(post => ({year: new Date(post.date).getFullYear(), month: ('0' + (new Date(post.date).getMonth() + 1)).slice(-2), title: post.slug}))

    const paramsConfig = {
        '/author/:name': nameMap,
        '/:year/:month/:title': postMap
    }

    new Sitemap(router)
        .applyParams(paramsConfig)
        .build('https://blog.lselawreview.com')
        .save('./sitemap.xml')
}