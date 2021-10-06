import express from 'express'
import removeMd from 'remove-markdown'
import html2unicode from 'html2unicode'
import marked from 'marked'

import { Post, Author } from './models.js'

const UArouter = express.Router()

UArouter.get('*', async (req, res) => {
    let title, description
    let image = 'https://res.cloudinary.com/dv6qbaj7u/image/upload/v1631355290/imgonline-com-ua-CompressToSize-TV0mfoM6TomiTX_tdiiuj.jpg'
    switch(req.url.match(/\/[A-Z]*/gi)[0]) {
        case '/about':
            title = 'About Us'
            description = 'The LSE Law Review is a student-run law journal seeking to provide a platform for high quality legal scholarship, with the aim of contributing to debates pertaining to all areas of the law. Our Editorial Board is composed of LSE students from all years of study who are fully responsible for all editorial and organisational decisions in relation to the Review’s publication. We work independently, albeit with the endorsement, of the LSE Department of Law.'
            break
        case '/sponsors':
            title = 'Sponsors'
            description = 'The LSE Law Review is proud to be sponsored by 3 Verulam Buildings. 3 Verulam Buildings is one of the UK’s principal sets of barristers’ chambers, with over 80 members specialising in a wide range of commercial law and practising both nationally, in other countries’ jurisdictions and internationally.'
            break
        case '/partners':
            title = 'Partners'
            description = 'Partners'
            break
        case '/authors':
            title = 'Authors'
            description = 'Authors'
            break
        case '/prizewinners':
            title = 'Prize Winners'
            description = 'Prize Winners'
            break
        case '/submissions':
            title = 'Submission Guidelines'
            description = 'Submission Guidelines'
            break
        case '/privacy':
            title = 'Privacy Policy'
            description = 'Privacy Policy'
            break
        default:
            title = 'LSE Law Review Blog'
            description = 'The LSE Law Review is a student-run law journal seeking to provide a platform for high quality legal scholarship, with the aim of contributing to debates pertaining to all areas of the law. Our Editorial Board is composed of LSE students from all years of study who are fully responsible for all editorial and organisational decisions in relation to the Review’s publication. We work independently, albeit with the endorsement, of the LSE Department of Law.'
            break
    }
    if(/\/author\/[A-Z]+/gi.test(req.url)) {
        const name = req.url.replaceAll('%20', ' ').match(/\/author\/([A-Z\s]+)/i)
        const author = await findAuthor(name)
        if(author !== null) {
            title = author.name
            description = author.bio
            image = `https://res.cloudinary.com/dv6qbaj7u/image/upload/v1633512635/${author.name.replace(' ', '-').replace('%20', '-')}`
        }
    } else if(/\/\d{4}\/\d{2}\/[A-Z]+/gi.test(req.url)) {
        const slug = req.url.match(/\/\d{4}\/\d{2}\/([A-Z0-9\-]+)/i)[1]
        const post = await findPost(slug)
        if(post !== null) {
            title = await genTitle(post.title)
            description = removeMd(post.content).slice(0,200)
            image = `https://res.cloudinary.com/dv6qbaj7u/image/upload/v1633512635/${post.slug}`
        }
    }
    res.render('bot', {
        title,
        description,
        image,
        url: req.url
    })
})

const findAuthor = async (name) => {
    let author

    try {
        author = await Author.findOne({ name })
        if(!author) {
            throw new Error('No documents found!')
        }
    } catch(e) {
        author = null
    }

    return author
}

const findPost = async (slug) => {
    let post

    try {
        post = await Post.findOne({ slug })
        if(!post) {
            throw new Error('No documents found!')
        }
    } catch(e) {
        post = null
    } 

    return post
}

const genTitle = async (title) => {
   const html = marked(title)
   const unicode = await html2unicode.html2unicode(html)
   return unicode
}

export default UArouter