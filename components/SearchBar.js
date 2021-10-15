import React from 'react'

const SearchBar = () => {
    return (
        <div className="d-flex flex-column flex-lg-row search-bar">
            <input type='text' name='address' placeholder='Enter Zipcode, City Or State'/>
            <input type='text' name='lname' placeholder='Last Name'/>
            <button type='submit' className='search-bar-btn'>Find</button>
        </div>
    )
}

export default SearchBar
