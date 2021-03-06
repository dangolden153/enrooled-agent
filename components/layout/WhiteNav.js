import React from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import logoImage from "../../public/logo.png";
import Head from "next/head";
import Script from "next/script";
const WhiteNav = ({ className }) => {
  return (
    <nav className={`navbar white-nav navbar-expand-lg navbar-light ${className}`}>
      <Head>
        {/* <Script strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MMHPJG4');
        `}
        </Script> */}
      </Head>
      {/* <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMHPJG4"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      /> */}
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
                  <NavLink href="/who-is-an-ea">
                    <a className="dropdown-item" href="/">
                      Who is an Enrolled Agent (EA)?
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
                {/* <li>
                  <NavLink href="/agents/all-states">
                    <a className="dropdown-item" href="/">
                      Enrolled Agent by State
                    </a>
                  </NavLink>
                </li> */}
                <li>
                  <NavLink href="/ea-listings">
                    <a className="dropdown-item" href="/">
                      All Enrolled Agents
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
            {/* <li className="nav-item">
              <NavLink href="/pricing">
                <a className="nav-link">Pricing</a>
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink href="/blog/all">
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
