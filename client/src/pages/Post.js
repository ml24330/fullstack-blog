import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Loading from '../components/Loading'
import rehypeRaw from 'rehype-raw'
import removeMd from 'remove-markdown'
import readingTime from 'reading-time'
import { DiscussionEmbed } from 'disqus-react'
import time from '../assets/images/time.svg'
import placeholder from '../assets/images/placeholder.png'
import { Helmet } from 'react-helmet'
import { API_URL } from '../config'


export default function Post({ match, history }) {

    const [post, setPost] = useState({})
    const [image, setImage] = useState()
    const [caption, setCaption] = useState()
    const [author, setAuthor] = useState([])
    // const [visits, setVisits] = useState()

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_URL}/post/slug/${match.params.title}`)
            if(res.status === 404) {
                history.push(`/404?from=${window.location.href}`)
            }
            const dat = await res.json()
            setPost(dat)

            const img_res = await fetch(`${API_URL}/images/post/${dat.slug}`)
            if(img_res.status === 200) {
                const img_dat = await img_res.json()
                setImage(img_dat.url)
                setCaption(img_dat.caption)
            }

            if(dat.authors.length > 0) {
                for (const author of dat.authors) {
                    const author_res = await fetch(`${API_URL}/authors/${author}`)
                    if(author_res.status === 200) {
                        const author_dat = await author_res.json()
                        setAuthor(prev => [...prev, author_dat])
                    }
                }
            } else {
                const author_res = await fetch(`${API_URL}/authors/${dat.author}`)
                    if(author_res.status === 200) {
                        const author_dat = await author_res.json()
                        setAuthor([author_dat])
                    }
            }

            if(dat.slug) {
                const visits_res = await fetch(`${API_URL}/visits/inc/${dat.slug}`, { 
                    method: 'PATCH'
                })
                if(visits_res.status === 404) {
                    await fetch(`/api/visits/${dat.slug}`, { method: 'post' })
                }
                // const post_res = await fetch(`${API_URL}/visits/${post.slug}`)
                // const post_dat = await post_res.json()
                // setVisits(post_dat.visits)
            }   
        })()
    }, [])

    const renderDate = (date) => {
        const MONTHS = {0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6: 'July', 7: 'August', 8: 'September', 9: 'October', 10: 'November', 11: 'December'}
        const d = new Date(date)
        const day = d.getDate()
        const month = MONTHS[d.getMonth()]
        const year = d.getFullYear()
        return `${day} ${month} ${year}`
    }

    if(!post.content) {
        return <Loading />
    }

    return (
        <div className="post-container">
            <Helmet>
                <title>{post.title}</title>
            </Helmet>
            {post.author && <span className="post-author"><Link to={`/author/${post.author}`}>{post.author} </Link></span>}
            {post.authors.length !== 0 && <span className="post-author">{post.authors.map((author, idx) => (
                <span key={author}>
                    <span><Link to={`/author/${author}`}>{author}</Link></span>
                    {idx+1 !== post.authors.length && <span> & </span>}
                </span>
            ))}</span>}
            <span> - </span>
            <span>{post.categories.map((category, idx) => (
                <span key={category}>
                    <span><Link to={`/category/${category}`}>{category}</Link></span>
                    {idx+1 !== post.categories.length && <span> & </span>}
                </span>
            ))}</span>
            <div className="post-title"><ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.title}</ReactMarkdown></div>
            <div className="post-meta">
                <span className="post-date">{renderDate(post.date)}</span>
                <span className="post-time"><img src={time} alt="time" />{Math.ceil(readingTime(removeMd(post.content).split('[1]')[0], { wordsPerMinute: 250 }).minutes)} min read</span>
            </div>
            {image && <>
                <img className="post-img" src={image} alt={post.title} />
                <div className="post-img-caption">{caption}</div>
            </>} 
            <div className="page-content">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.content}</ReactMarkdown>
            </div>
            {author.map(author => (
                <div key={author.name} className="page-author">
                    <div className="author">
                        <div><strong>{author.name}</strong></div>
                        <div>{author.bio}</div>
                    </div>
                    {author.image ? <div><img src={author.image} alt={author.name}></img></div> : <div><img src={placeholder} alt={author.name} /></div>}
                </div>
            ))}
            <div>
                <DiscussionEmbed
                    shortname='lse-law-review'
                    config={
                        {
                            url: window.location.href,
                            identifier: post._id,
                            title: post.title,
                            language: 'en'
                        }
                    }
                />
            </div>
        </div>
    )
}
