import React from 'react'

const Card = ({ children }) => {
    return (
        <div className='card d-flex flex-column align-items-center justify-content-center'>
            { children }
        </div>
    )
}

export default Card
