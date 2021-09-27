import React from 'react'

const SearchBar = ({ show = 'false' }) => {
    return (
        <div className={`d-flex flex-column flex-lg-row search-bar${ show == 'true' ? '' : ' hide' }` }>
            <input type='text' name='fname' placeholder='First Name'/>
            <input type='text' name='lname' placeholder='Last Name'/>
            <button type='submit' className='search-bar-btn'>Find</button>
        </div>
    )
}

export default SearchBar
