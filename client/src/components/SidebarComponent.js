import React, { useEffect } from 'react'
import PaginatorComponent from './PaginatorComponent'

export default function SidebarComponent({ posts }) {

    useEffect(() => {
        window.FB.XFBML.parse()
    }, [])

    return (
        <div>
            <div className="fb-container text-center">
                <div className="fb-page" data-href="https://www.facebook.com/lselawreview" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/lselawreview" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/lselawreview">LSE Law Review</a></blockquote></div>
            </div>
            <div className="section-title">Popular Posts</div>
            <PaginatorComponent objs={posts} perPage={6} />
        </div>
    )
}
