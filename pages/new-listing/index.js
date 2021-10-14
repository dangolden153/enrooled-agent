import React from "react";
import Banner from "../../components/Banner";
import NewListing from "../../public/images/banners/cropped-view.png";

const index = () => {
  return (
    <div>
      <Banner background={NewListing}>
        <div className="bannerText">
          <h1>Apply For New Listing</h1>
        </div>
      </Banner>
      <div className="new-listing container">
        <div>
          <h3>Personal</h3>
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
};

export default index;
