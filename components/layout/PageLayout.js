import React from 'react'
import Footer from './Footer'
import Header from './Header'
import BlueNav from './BlueNav'
import WhiteNav from './WhiteNav'

const PageLayout = ({ children }) => {
    return (
        <div className='page-layout container-fluid'>
            <Header />

            <div className="col-12">
                <BlueNav />
                <WhiteNav />
            </div>

            {children}

            <Footer />
        </div>
    )
}

export default PageLayout
