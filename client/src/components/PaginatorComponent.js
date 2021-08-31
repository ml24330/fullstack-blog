import React, { useState, useRef } from 'react'
import ReactPaginate from 'react-paginate'
import PostComponent from './PostComponent'

export default function PaginatorComponent({ objs, perPage, showImage }) {

    const [visible, setVisible] = useState(objs.slice(0, perPage))
    
    const container = useRef(null)

    const handlePageChange = (data) => {
        setVisible(objs.slice(data.selected*perPage, data.selected*perPage+perPage))
        container.current.scrollIntoView()
    }

    return (
        <React.Fragment>
            <div ref={container}>
                {visible.map((obj, idx) => (
                    <PostComponent post={obj} key={obj.title} showImage={typeof showImage == 'function' ? showImage(idx) : false} />
                ))}
            </div>
            {objs.length > perPage && 
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(objs.length/perPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
            }
        </React.Fragment>
    )
}
