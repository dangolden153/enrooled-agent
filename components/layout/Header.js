import React from 'react'
import BlueNav from './BlueNav'
import WhiteNav from './WhiteNav'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()
    let pageName = ''

    switch (router.pathname) {
        case '/':
            pageName = 'Landing Page'
            break
        case '/about':
            pageName = 'About Us'
            break
        case '/agents':
            pageName = 'Agents List'
            break
        case '/ask-an-ea':
            pageName = 'Ask an EA'
            break
        case '/auth':
            pageName = 'Login to Enrolled Agent'
            break
        case '/blog':
            pageName = 'Blog'
            break
        case '/contact':
            pageName = 'Contact Us'
            break
        case '/dashboard':
            pageName = 'Dashboard'
            break
        case '/ea-listings':
            pageName = 'EA Listings'
            break
        case '/faq':
            pageName = 'FAQs'
            break
        case '/find-agent':
            pageName = 'Find an EA'
            break
        case '/home':
            pageName = 'Home Page'
            break
        case '/license-verification':
            pageName = 'License Verification'
            break
        case '/new-listing':
            pageName = 'Create a new Listing'
            break
        case '/new-question':
            pageName = 'Ask a Question'
            break
        case '/privacy':
            pageName = 'Privacy Policy'
            break
        case '/resource':
            pageName = 'Resources'
            break
        case '/terms':
            pageName = 'Terms and Conditions'
            break
        case '/what-is-an-ea':
            pageName = 'What is an EA'
            break
        default:
            pageName = 'Default Page'
            break
    }

    return (
        <header className="header d-flex w-100">
            <Head>
                <title>Enrolled Agent | {pageName}</title>
                <meta name="description" content="Insert Description Here" />
                <link rel="icon" href="" />
            </Head>
            <div className="col-12">
                <div className="row">
                    <BlueNav />
                </div>
                <div className="row">
                    <WhiteNav />
                </div>
            </div>
        </header>
    )
}

export default Header
