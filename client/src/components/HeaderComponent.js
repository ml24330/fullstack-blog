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
import { API_URL } from '../config'


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
                const res = await fetch(`${API_URL}/posts/search/${query}`)
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
                        <Link to="/"><NavLink>Home</NavLink></Link>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            About
                        </DropdownToggle>
                        <DropdownMenu right>
                            <Link to="/about"><DropdownItem>
                            About Us
                            </DropdownItem></Link>
                            <DropdownItem href="https://lawreview.lse.ac.uk/about/editorialteam/" target="_blank" rel="noreferrer noopener">
                            Editorial Team
                            </DropdownItem>
                            <Link to="/sponsors"><DropdownItem>
                            Sponsors
                            </DropdownItem></Link>
                            <Link to="partners"><DropdownItem>
                            Partners
                            </DropdownItem></Link>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Authors
                        </DropdownToggle>
                        <DropdownMenu right>
                            <Link to="/authors"><DropdownItem>
                            All Authors
                            </DropdownItem></Link>
                            <Link to="/prizewinners"><DropdownItem>
                            Prize Winners
                            </DropdownItem></Link>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Article by Categories
                        </DropdownToggle>
                        <DropdownMenu right>
                            <Link to="/category/Criminal Law"><DropdownItem>
                            Criminal Law
                            </DropdownItem></Link>
                            <Link to="/category/International Law"><DropdownItem>
                            International Law
                            </DropdownItem></Link>
                            <Link to="/category/Private Law"><DropdownItem>
                            Private Law
                            </DropdownItem></Link>
                            <Link to="/category/Public Law"><DropdownItem>
                            Public Law
                            </DropdownItem></Link>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <Link to="/submissions"><NavLink>Submission Guidelines</NavLink></Link>
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
