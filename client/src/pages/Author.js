import React, { useState, useEffect } from 'react'
import PostComponent from '../components/PostComponent'
import Loading from '../components/Loading'
import book from '../assets/images/book.svg'
import { Helmet } from 'react-helmet'
import { API_URL } from '../config'

export default function Author({ match, history }) {

    const [author, setAuthor] = useState({posts: []})
    const [image, setImage] = useState()

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_URL}/authors/${match.params.name}`)
            if(res.status === 404) {
                history.push(`/404?from=${window.location.href}`)
            }
            const dat = await res.json()
            setAuthor(dat)
            if(dat.image.data) {
                const img = new Buffer.from(dat.image.data).toString('base64')
                setImage(`data:image/png;base64,${img}`)
            }
        })()
    }, [match.params.name, history])

    if(!author.name) {
        return <Loading />
    }

    return (
        <div className="page-container">
            <Helmet>
                <title>{author.name}</title>
            </Helmet>
            {image && <img className="avatar" src={image} alt={author.name} />} 
            <div className="page-heading">{author.name}</div>
            <div className="author-category">{author.category === 'editor' ? 'Editor' : author.category === 'contributor' ? 'Contributor' : author.category}</div>
            <div className="page-subheading">{author.bio}</div>
            <div className="page-subheading"><img src={book} alt="posts" />{author.posts.length} {author.posts.length === 1 ? 'post' : 'posts'}</div>
            <div className="page-content">
            {author.posts.reverse().map(post => (
                <PostComponent post={post} key={post.title} />
            ))}
            </div>
        </div>
    )
}
