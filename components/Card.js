import React from 'react'

const Card = ({ className='card-rounded', children }) => {
    return (
        <div className={`card ${className}`}>
            { children }
        </div>
    )
}

export default Card
