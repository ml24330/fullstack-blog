import React, { useState } from 'react'

export default function Collapse({ title, children }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <p className={`_collapse ${isOpen ? "active" : "inactive"}`} onClick={() => setIsOpen(isOpen => !isOpen)}>{title}</p>
            {isOpen && children}
        </>
    )
}
