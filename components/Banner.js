import React from 'react'
import SearchBar from './SearchBar'

const Banner = ({ search = false, background, children }) => {

    // background-repeat: no-repeat;
    // background-attachment: fixed;
    // background-size: cover;

    return (
        <div style={{ 
            backgroundImage: `url(${background.src})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
        }}>
            <div className="banner-inner">
                {children}
                { search ? <SearchBar /> : ''}
            </div>
        </div>
    )
}

export default Banner
