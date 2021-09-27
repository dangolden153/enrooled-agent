import React from 'react'
import Image from 'next/image'
import NavLink from './NavLink'
import logoImage from '../../public/logo.png'
import { List } from 'react-bootstrap-icons'
const WhiteNav = () => {
    return (
        <div className='nav white-nav navbar justify-content-between'>
            <div className="col-sm-12 col-md-12 col-lg-5 d-md-flex flex-row justify-content-between">
                <a href="/" className="navbar-brand">
                    <Image src={logoImage} alt="pixs" width="290" height="38" className="" />
                </a>

                <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <List className='navbar-toggler-icon' size='30' />
                    </span>
                </button>
            </div>
            <div className="col-lg-5">
                <div className="navbar-collapse" id='navbarContent'>
                    <ul className="navbar-nav justify-content-between">
                        <li className="nav-item">
                            <NavLink href='/'>
                                <a className="nav-link">
                                    Find an Enrolled Agent
                                </a>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink href='/dsjskfds'>
                                <a className="nav-link">
                                    Ask an EA
                                </a>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink href='/ireiurnie'>
                                <a className="nav-link">
                                    News & Articles
                                </a>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink href='/ewqp0ewsd'>
                                <a className="nav-link">
                                    Resources
                                </a>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WhiteNav
