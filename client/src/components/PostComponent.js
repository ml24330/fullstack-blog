import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import removeMd from 'remove-markdown'
import readingTime from 'reading-time'
import ReactMarkdown from 'react-markdown'
import time from '../assets/images/time.svg'
import { API_URL } from '../config'

export default function PostComponent({ post: { _id, slug, title, author, authors, categories, category_override, content, date }, showImage }) {

    const [image, setImage] = useState()

    useEffect(() => {
        if(showImage) {
            (async () => {
                const res = await fetch(`${API_URL}/images/post/${slug}`)
                if(res.status === 200) {
                    const dat = await res.json()
                    setImage(dat.url)
                }
            })()
        }
    }, [showImage, slug])

    const renderDate = (date) => {
        const MONTHS = {0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6: 'July', 7: 'August', 8: 'September', 9: 'October', 10: 'November', 11: 'December'}
        const d = new Date(date)
        const day = d.getDate()
        const month = MONTHS[d.getMonth()]
        const year = d.getFullYear()
        return `${day} ${month} ${year}`
    }

    return (
        <div className="post-component d-flex justify-content-center">
            <div className="post">
                <div className="post-category">{categories.map((category, idx) => (
                    <span key={category}>
                        <span><Link to={category_override || `/category/${category}`}>{category}</Link></span>
                        {idx+1 !== categories.length && <span> & </span>}
                    </span>
                ))}</div>
                <div className="post-title"><Link to={`/${new Date(date).getFullYear()}/${('0' + (new Date(date).getMonth() + 1)).slice(-2)}/${slug}`}><ReactMarkdown>{title}</ReactMarkdown></Link></div>
                <div className="post-date">{renderDate(date)}</div>
                {author && <span className="post-author"><Link to={`/author/${author}`}>{author} </Link></span>}
                {authors.length !== 0 && <span className="post-author">{authors.map((author, idx) => (
                    <span key={author}>
                        <span><Link to={`/author/${author}`}>{author}</Link></span>
                        {idx+1 !== authors.length && <span> & </span>}
                    </span>
                ))}</span>}
                <span className="post-time"><img src={time} alt="time" />{Math.ceil(readingTime(removeMd(content).split('[1]')[0], { wordsPerMinute: 250 }).minutes)} min read</span>
                <div className="post-excerpt">{removeMd(content).slice(0,200)}...</div>
            </div>
            {image && (<div className="post-icon-container">
                <img src={image} alt="1" className="post-icon" />
            </div>)}
        </div>
    )
}
