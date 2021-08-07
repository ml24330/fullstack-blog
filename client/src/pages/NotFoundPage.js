import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

export default function NotFoundPage({ location, history }) {

    useEffect(() => {
        setTimeout(() => {
            history.push('/')
        }, 3000)
    }, [history])

    return (
        <div className="page-container">
            <Helmet>
                <title>404 Not Found</title>
            </Helmet>
            <div className="page-heading">404 Not Found</div>
            <p>The URL you were trying to access, {location.search.slice(6)}, does not exist :/</p>
            <p>Redirecting you to the home page in 3 seconds...</p>
        </div>
    )
}
