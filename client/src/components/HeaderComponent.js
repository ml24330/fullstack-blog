import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import PaginatorComponent from './PaginatorComponent'
import header from '../assets/images/header.png'
import logo from '../assets/images/logo.png'
import search from '../assets/images/search.svg'


export default function HeaderComponent() {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [navIsOpen, setNavIsOpen] = useState(false)
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    const location = useLocation()

    useEffect(() => {
        setModalIsOpen(false)
    }, [location])

    const toggleNav = () => setNavIsOpen(!navIsOpen)
    const toggleModal = () => setModalIsOpen(!modalIsOpen)

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSearch = (e) => {
        if(query && (!e.key || e.key === 'Enter')) {
            (async () => {
                const res = await fetch(`/api/posts/search/${query}`)
                if(res.status === 200) {
                    const dat = await res.json()
                    setResults(dat.reverse())
                } else {
                    setResults([])
                }
                setModalIsOpen(true)
            })()
        }
    }

    return (
        <React.Fragment>
            <div>
                <Modal isOpen={modalIsOpen} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}>Found {results.length} {results.length === 1 ? 'post' : 'posts'} containing '{query}'</ModalHeader>
                    <ModalBody>
                        <PaginatorComponent objs={results} perPage={5} />
                    </ModalBody>
                    <ModalFooter>
                    <Button color="danger" onClick={toggleModal}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <div className="header-title"><img src={logo} alt="logo" /><span>LSE Law Review Blog</span></div>
            <Navbar light expand="lg">
                <NavbarToggler onClick={toggleNav} />
                <Collapse isOpen={navIsOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            About
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/about">
                            About Us
                            </DropdownItem>
                            <DropdownItem href="https://lawreview.lse.ac.uk/about/editorialteam/" target="_blank" rel="noreferrer noopener">
                            Editorial Team
                            </DropdownItem>
                            <DropdownItem href="/sponsors">
                            Sponsors
                            </DropdownItem>
                            <DropdownItem href="/partners">
                            Partners
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Authors
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/authors">
                            All Authors
                            </DropdownItem>
                            <DropdownItem href="/prizewinners">
                            Prize Winners
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Article by Categories
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/category/Criminal Law">
                            Criminal Law
                            </DropdownItem>
                            <DropdownItem href="/category/International Law">
                            International Law
                            </DropdownItem>
                            <DropdownItem href="/category/Private Law">
                            Private Law
                            </DropdownItem>
                            <DropdownItem href="/category/Public Law">
                            Public Law
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavLink href="/submissions">Submission Guidelines</NavLink>
                    <NavLink href="https://lawreview.lse.ac.uk" target="_blank" rel="noreferrer noopener">Main Journal Site</NavLink>
                    <NavLink className="nav-search"><input value={query} placeholder="Search posts..." onChange={handleChange} onKeyDown={handleSearch} /><img src={search} alt="search" onClick={handleSearch} /></NavLink>
                </Nav>
                </Collapse>
            </Navbar>
            <div className="header-banner">
                <Link to="/"><img src={header} alt="header" /></Link>
            </div>
        </React.Fragment>
    )
}
