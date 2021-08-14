import React, { useState, useEffect } from 'react'
import PaginatorComponent from '../components/PaginatorComponent'
import SidebarComponent from '../components/SidebarComponent'
import Loading from '../components/Loading'
import { Helmet } from 'react-helmet'
import { API_URL } from '../config'

export default function HomePage() {

    const [recentPosts, setRecentPosts] = useState([])
    const [popularPosts, setPopularPosts] = useState([])

    useEffect(() => {
        (async () => {
            const posts_res = await fetch(`${API_URL}/posts`)
            const posts_dat = await posts_res.json()
            setRecentPosts(posts_dat.reverse())
            const visits_res = await fetch(`${API_URL}/visits`)
            const visits_dat = await visits_res.json()
            const map = {}
            for(const obj of visits_dat) {
                map[obj.id] = obj.visits
            }
            const sorted = [...posts_dat].sort((a,b) => map[a.slug] > map[b.slug] ? -1 : map[a.slug] < map[b.slug] ? 1 : 0)
            setPopularPosts(sorted)
        })()
    }, [])

    if(recentPosts.length === 0 | popularPosts.length === 0) {
        return <Loading />
    }

    return (
        <div className="home-container justify-content-center d-flex flex-wrap">
            <Helmet>
                <title>LSE Law Review Blog</title>
            </Helmet>
            <div>
                <div className="section-title">Recent posts</div>
                <PaginatorComponent objs={recentPosts} perPage={10}/>
            </div>
            <SidebarComponent posts={popularPosts} />
        </div>
    )
}
