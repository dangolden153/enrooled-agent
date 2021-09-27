import React from 'react'
import Image from 'next/image'

const StartSection = ({ image }) => {
    return (
        <div className='section d-flex flex-column align-items-center justify-content-center'>
            <div className="d-flex flex-column flex-lg-row justify-content-between justify-content-md-center">
                <div className="col-lg-6 text-center text-lg-start justify-content-center justify-content-lg-start">
                    <h1 className='section-heading'>Find the right Enrolled Agent for you</h1>
                    <p className='section-body'>Why deal with a non-licensed Tax Expert for tax related affairs? We are here to connect you to a verified Tax Expert in your area that can handle your tax and Internal Revenue Service related issues. We will happily connect you to an Enrolled Agent for free.</p>
                    <button type="button" className='btn-common'>Get Started</button>
                </div>
                <div className="col-lg-5 mt-5r-sm d-flex justify-content-center justify-content-lg-start">
                    <Image src={image} />
                </div>
            </div>
        </div>
    )
}

export default StartSection
