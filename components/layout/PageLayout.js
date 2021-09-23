import React from 'react'
import Footer from './Footer'
import Header from './Header'

const PageLayout = ({ children }) => {
    return (
        <div className='page-layout container-fluid'>
            <Header />
            { children }
            <Footer />
        </div>
    )
}

export default PageLayout
