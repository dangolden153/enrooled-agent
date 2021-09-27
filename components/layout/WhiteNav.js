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
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Find an Enrolled Agent</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/'>Ask an EA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/'>News & Articles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/'>Resources</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default WhiteNav
