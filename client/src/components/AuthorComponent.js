import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap'

export default function AuthorComponent({ author }) {

    const [image, setImage] = useState()

    useEffect(() => {
        (async () => {
            try {
                const image = await import(`../assets/images/${author.name.replace(/ /g,'').toLowerCase()}.jpg`)
                setImage(image.default)
            } catch(e) {
                const image = await import('../assets/images/placeholder.png')
                setImage(image.default)
            }
        })()
    }, [author.name])

    return (
        <div className="author-card card" body>
            <CardImg className="author-img" top src={image} alt="Card image cap" />
            <CardBody>
            <Link to={`/author/${author.name}`}><CardTitle tag="h5">{author.name}</CardTitle></Link>
            <Link to={`/author/${author.name}`}><CardSubtitle tag="h6" className="mb-2 text-muted">View Posts</CardSubtitle></Link>
            <CardText>{author.bio}</CardText>
            </CardBody>
        </div>
    )
}