import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { Star, StarFill } from "react-bootstrap-icons";

const HorizontalCard = ({ name, location, image, numStars,href }) => {
  const getStars = (max, stars) => {
    let starList = [];
    for (let i = 0; i < stars; i++) {
      starList.push(<StarFill key={i} className="card-star" />);
    }
    for (let i = stars; i < max; i++) {
      starList.push(<Star key={i} className="card-star" />);
    }
    return starList;
  };

  return (
    <div className="horizontalCard container">
      <Image
        className="card-img rounded-circle"
        src={image}
        width="100"
        height="100"
      />
      <div>
        <h2>{name}</h2>
        <span>{location}</span>
      </div>
      <div className="review">
        {getStars(5, numStars)} <br /> {numStars} reviews
      </div>
      <Link href={href}><button>View Profile</button></Link>
    </div>
  );
};

export default HorizontalCard;
