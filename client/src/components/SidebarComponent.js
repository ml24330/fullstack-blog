import React, { useState, useEffect } from 'react'
import PostComponent from './PostComponent'

const slugs = {'building-the-conscience-of-humankind': 'Best Blog Post 2021', 'a-tale-of-communities': 'Best Case Note 2021', 'treaties-norms-international-courts-hierarchy-theory-treading-water': 'Best Blog Post 2020', 'r-evans-uneasy-precedent': 'Best Case Note 2020', 'english-choice-law-contract-rome-i-regime': 'Best Blog Post 2019' }

export default function SidebarComponent({ posts }) {

    const [winners, setWinners] = useState([])

    useEffect(() => {
        const winners = posts.filter(post => {
            return Object.keys(slugs).includes(post.slug)
        })
        setWinners(winners.map(winner => {
            return {...winner, categories: [slugs[winner.slug]], category_override: '/prizewinners'}
        }))
    }, [posts])

    useEffect(() => {
        window.FB.XFBML.parse()
    }, [])

    return (
        <div>
            <div className="fb-container text-center">
                <div className="fb-page" data-href="https://www.facebook.com/lselawreview" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/lselawreview" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/lselawreview">LSE Law Review</a></blockquote></div>
            </div>
            <div className="section-title">Prize winners</div>
            {winners.map(obj => (
                <PostComponent post={obj} key={obj.title} />
            ))}
        </div>
    )
}
