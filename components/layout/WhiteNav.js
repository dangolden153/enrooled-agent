import React from 'react'
import Image from 'next/image'
import NavLink from './NavLink'
import logoImage from '../../public/logo.png'


const WhiteNav = () => {
  return (
    <nav className="navbar white-nav navbar-expand-lg navbar-light">
      <div className="w-100 bar d-lg-flex align-items-center justify-content-between">
        <a className="navbar-brand" href="/">
          <Image src={logoImage} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <NavLink href="/">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Find an Enrolled Agent
                </a>
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink href="/what-is-an-ea">
                    <a className="dropdown-item" href="/">
                      What is an Enrolled Agent (EA)?
                    </a>
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/find-agent">
                    <a className="dropdown-item" href="/">
                      Enrolled Agent Search
                    </a>
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/agents/all-states">
                    <a className="dropdown-item" href="/">
                      Enrolled Agent by State
                    </a>
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/agents">
                    <a className="dropdown-item" href="/">
                      All Enrolled Agents
                    </a>
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/license-verification">
                    <a className="dropdown-item" href="/">
                      Verify an Enrolled Agent's License
                    </a>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink href="/ask-an-ea">
                <a className="nav-link">Ask an EA</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/blog">
                <a className="nav-link">News & Articles</a>
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink href="/resource">
                <a className="nav-link dropdown-toggle">Resources</a>
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="nav-dropdown-header" href="/">
                    View By Category
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Browse All Categories
                  </a>
                </li>
                <li>
                  <a className="nav-dropdown-header" href="/">
                    Tools
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Tax Resources
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Tax Tips
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Tax & Business Newsletter
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Tax Planning Newsletter
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Update Newsletter
                  </a>
                </li>
                <li>
                  <a className="nav-dropdown-header" href="/">
                    More
                  </a>
                </li>
                <li>
                  <NavLink href="/new-listing">
                    <a className="dropdown-item">Create Your Free EA Listing</a>
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default WhiteNav;
