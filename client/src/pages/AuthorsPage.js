import React, { useState, useEffect } from 'react'
import AuthorComponent from '../components/AuthorComponent'
import Loading from '../components/Loading'
import { Helmet } from 'react-helmet'
import { API_URL } from '../config'

export default function AuthorsPage() {

    const [authors, setAuthors] = useState([])
    const [roles, setRoles] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_URL}/authors`)
            const dat = await res.json()
            setAuthors(dat)
            const roles = dat.reduce((prev, current) => {
                if(!prev.includes(current.category)) {
                    prev.push(current.category)
                }
                return prev
            }, [])
            setRoles(roles)
        })()
    }, [])

    if(authors.length === 0) {
        return <Loading />
    }

    return (
        <div className="page-container">
            <Helmet>
                <title>Authors</title>
            </Helmet>
            <div className="page-heading">Authors</div>
            {roles.map(role =>
                (<React.Fragment>
                    <div className="page-subheading" style={{ fontSize: '1.4rem' }}>{role}s</div>
                    <div key={role} className="d-flex flex-wrap justify-content-center">
                        {authors.filter(({ category }) => category === role).map(author =>
                            (<AuthorComponent author={author} key={author.name}/>)
                        )}  
                    </div>
                    <br />
                </React.Fragment>)
            )}
        </div>
    )
}
