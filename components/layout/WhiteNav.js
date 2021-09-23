import React from 'react'
import Image from 'next/image'
import NavLink from './NavLink'
import logoImage from '../../public/logo.png'
const WhiteNav = () => {
    return (
        <div className='row nav white-nav navbar justify-content-between'>
            <div className="col-4">
                <a href="/" className="navbar-brand">
                    <Image src={logoImage} alt="pixs" width="290" height="38" className="" />
                </a>
            </div>
            <div className="d-flex col-lg-3 justify-content-end">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="col-5">
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
