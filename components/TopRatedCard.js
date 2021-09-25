import React from 'react'
import Image from 'next/image'
import { Star, StarFill } from 'react-bootstrap-icons';
import Card from './Card';

const TopRatedCard = ({ image, name, location, numStars, profileLink }) => {

    const getStars = (max, stars) => {
        let starList = [];
        for (let i = 0; i < stars; i++) {
            starList.push(<StarFill className='card-star' />);
        }
        for (let i = stars; i < max; i++) {
            starList.push(<Star className='card-star' />);
        }
        return starList;
    };
    return (
        <Card>
            <Image className='card-image rounded-circle' src={image} width='100' height='100' />
            <h2>{name}</h2>
            <span>{location}</span>
            <div className="star-list d-flex flex-row justify-content-between">
                {getStars(5, numStars)}
            </div>
            <button type='button' className='btn btn-card'>View Profile</button>
        </Card>
    )
}

export default TopRatedCard
