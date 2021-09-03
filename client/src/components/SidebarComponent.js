import React, { useEffect } from 'react'
import PaginatorComponent from './PaginatorComponent'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/images/Launch.png'
import img2 from '../assets/images/img2.jpeg'
import img3 from '../assets/images/img3.jpeg'
import img4 from '../assets/images/hero3.jpg'
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/Launch2.jpg'

export default function SidebarComponent({ posts }) {

    useEffect(() => {
        window.FB.XFBML.parse()
    }, [])

    return (
        <div>
            <Carousel showStatus={false} dynamicHeight={true} autoPlay={true} infiniteLoop={true} >
                <div>
                    <img src={img1} alt="img1" />
                </div>
                <div>
                    <img src={img2} alt="img2" />
                </div>
                <div>
                    <img src={img3} alt="img3" /> 
                </div>
                <div>
                    <img src={img4} alt="img4" />
                </div>
                <div>
                    <img src={img5} alt="img5" />
                </div>
                <div>
                    <img src={img6} alt="img6" />
                </div>
            </Carousel>
            <div className="fb-container text-center">
                <div className="fb-page" data-href="https://www.facebook.com/lselawreview" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/lselawreview" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/lselawreview">LSE Law Review</a></blockquote></div>
            </div>
            <div className="section-title">Popular Posts</div>
            <PaginatorComponent objs={posts} perPage={5} />
        </div>
    )
}
