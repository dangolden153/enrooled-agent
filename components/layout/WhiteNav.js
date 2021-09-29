import React from 'react'
import Image from 'next/image'
import NavLink from './NavLink'
import logoImage from '../../public/logo.png'
import { List } from 'react-bootstrap-icons'
const WhiteNav = () => {
    return (
        <nav className="navbar white-nav navbar-expand-lg navbar-light">
            <div className="w-100 bar d-lg-flex align-items-center justify-content-between">
                <a className="navbar-brand" href="/">
                    <Image src={logoImage} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Find an Enrolled Agent
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">What is an Enrolled Agent (EA)?</a></li>
                                <li><a className="dropdown-item" href="/">Enrolled Agent Search</a></li>
                                <li><a className="dropdown-item" href="/">Enrolled Agent by State</a></li>
                                <li><a className="dropdown-item" href="/">All Enrolled Agents</a></li>
                                <li><a className="dropdown-item" href="/">Verify an Enrolled Agent's License</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/'>Ask an EA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/'>News & Articles</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="nav-dropdown-header" href="/">View By Category</a></li>
                                <li><a className="dropdown-item" href="/">Browse All Categories</a></li>
                                <li><a className="nav-dropdown-header" href="/">Tools</a></li>
                                <li><a className="dropdown-item" href="/">Tax Resources</a></li>
                                <li><a className="dropdown-item" href="/">Tax Tips</a></li>
                                <li><a className="dropdown-item" href="/">Tax & Business Newsletter</a></li>
                                <li><a className="dropdown-item" href="/">Tax Planning Newsletter</a></li>
                                <li><a className="dropdown-item" href="/">Update Newsletter</a></li>
                                <li><a className="nav-dropdown-header" href="/">More</a></li>
                                <li><a className="dropdown-item" href="/">Create Your Free EA Listing</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default WhiteNav
