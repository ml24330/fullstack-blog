import React, { useState, useEffect } from 'react'
import PaginatorComponent from '../components/PaginatorComponent'
import Loading from '../components/Loading'
import book from '../assets/images/book.svg'
import { Helmet } from 'react-helmet'
import { API_URL } from '../config'

export default function Category({ match, history }) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        (async () => {
            setPosts([])
            const res = await fetch(`${API_URL}/posts/${match.params.cat}`)
            if(res.status === 404) {
                history.push(`/404?from=${window.location.href}`)
            }
            const dat = await res.json()
            setPosts(dat.reverse())
        })()
    }, [match.params.cat])

    if(posts.length === 0) {
        return <Loading />
    }

    return (
        <div className="page-container">
            <Helmet>
                <title>{match.params.cat}</title>
            </Helmet>
            <div className="page-heading">{match.params.cat}</div>
            <div className="page-subheading"><img src={book} alt="posts" />{posts.length} {posts.length === 1 ? 'post' : 'posts'}</div>
            <div className="page-content">
                <PaginatorComponent objs={posts} perPage={10} showImage={() => true} />
            </div>
        </div>
    )
}
