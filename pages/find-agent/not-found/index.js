import React from 'react'
// import banner1 from "../../../public/images/search.png";
import Banner from "../../../components/Banner";
const index = () => {
    return (
        <div>
            <Banner search background=""></Banner>
            <div className="d-flex flex-row justify-content-center">
                <h2 className="mt-5" style={{ marginBottom: '30rem' }}>Sorry, we couldn't find any results for "David"</h2>
            </div>
        </div>
    )
}

export default index
