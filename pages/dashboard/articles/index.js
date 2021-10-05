import React from "react";
import Image from "next/image";
import Dollar from "../../../public/images/dollar-bill.png";

const index = () => {
  return (
    <div className="container recent-article">
      <div className="article-head">
        <h1>News & Articles</h1>
      </div>

      <hr />

      <h4>Recent News</h4>

      <div className="col-md-6 col xl-6">
        <div className="card mb-3">
          <Image src={Dollar} />
          <div className="card-body">
            <p className="card-text">
              <small class="text-muted">24th September, 2021</small>
            </p>
            <h5 className="card-title">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </h5>
          </div>
        </div>
      </div>
      <div className="col-md-6 col xl-6"></div>
    </div>
  );
};

export default index;
