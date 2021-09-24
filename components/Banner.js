import React from 'react'
import SearchBar from './SearchBar'
import styled from 'styled-components'

const Banner = ({ search = false, background, children }) => {

    const BannerDiv = styled.div`
        background-image: url('${background.src}');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        padding: 0;
        margin: 0;
        width: 100%;
    `

    return (
        <BannerDiv>
            <div className="banner-inner">
                {children}
                <SearchBar show={search ? 'true' : 'false'} />
            </div>
        </BannerDiv>
    )
}

export default Banner
