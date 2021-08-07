import React, { useState, useEffect } from 'react'
import Launch from '../assets/images/Launch2.jpg'
import PostComponent from '../components/PostComponent'
import { Helmet } from 'react-helmet'

const slugs = {'building-the-conscience-of-humankind': 'LSE Law Review Prize for Best Blog Post 2021', 'a-tale-of-communities': 'LSE Law Review Prize for Best Case Note 2021', 'treaties-norms-international-courts-hierarchy-theory-treading-water': 'LSE Law Review Prize for Best Blog Post 2020', 'r-evans-uneasy-precedent': 'Francis Taylor Building Prize for Best Case Note 2020', 'english-choice-law-contract-rome-i-regime': 'LSE Law Review Prize for Best Blog Post 2019' }

export default function PrizesPage() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        (async () => {
            const posts = []
            for(const slug of Object.keys(slugs)) {
                const res = await fetch(`/api/post/slug/${slug}`)
                const dat = await res.json()
                posts.push(dat)
            }
            setPosts(posts)
        })()
    }, [])

    return (
        <div className="page-container">
            <Helmet>
                <title>Prize Winners</title>
            </Helmet>
            <div className="page-heading">Prize Winners</div>
            <img className="img-large" src={Launch} alt="launch" />

            {posts.map(post => (
                <span key={post.slug}>
                    <div className="page-heading-small" style={{ marginBottom: 0 }}>{slugs[post.slug]}</div>
                    <PostComponent post={post} />
                    <br />
                </span>
            ))}
        </div>
    )
}
