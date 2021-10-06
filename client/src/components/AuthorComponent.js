import React from 'react'
import { Link } from 'react-router-dom'
import {
    CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap'
import placeholder from '../assets/images/placeholder.png' 

export default function AuthorComponent({ author }) {

    return (
        <div className="author-card card" body>
            <CardImg className="author-img" top src={author.image || placeholder} alt="Card image cap" />
            <CardBody>
            <Link to={`/author/${author.name}`}><CardTitle tag="h5">{author.name}</CardTitle></Link>
            <Link to={`/author/${author.name}`}><CardSubtitle tag="h6" className="mb-2 text-muted">View Posts</CardSubtitle></Link>
            <CardText>{author.bio}</CardText>
            </CardBody>
        </div>
    )
}
