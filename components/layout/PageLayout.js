import React from 'react'
import Footer from './Footer'
import Header from './Header'

const PageLayout = ({ children }) => {
    return (
        <div className='page-layout container-fluid'>
            <Header />

            <div className="col-12">
                <div className="row">
                    <BlueNav />
                </div>
                <div className="row">
                    <WhiteNav />
                </div>
            </div>

            { children }
            
            <Footer />
        </div>
    )
}

export default PageLayout
