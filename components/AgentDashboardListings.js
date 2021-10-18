import React from "react";
import { Star, StarFill } from "react-bootstrap-icons";

const AgentDashboardListings = () => {
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
    <div>
      <div className="card w-75 p-5">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <h2>Jane Doe</h2>
              <p>Enrolled Agent</p>
            </div>
            <div className="col-md-6 text-end">
              <div className="review">
                {getStars(5, 4)} <br /> 4 reviews
              </div>
            </div>
          </div>
          <div style={{ marginTop: "55px" }}>
            <h4>Services :</h4>
            <p>General Tax services</p>
            <p>Tax Expert</p>
            <p>Internal Revenue Service related issues</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboardListings;
