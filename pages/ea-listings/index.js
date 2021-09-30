import React, { useMemo, useState } from "react";
import Banner from "../../components/Banner";
import EaListbanner from "../../public/images/banners/ea-listing.webp";
import Dummy from "../../public/images/card-man.webp";
import Image from "next/image";
import LaptopMan from "../../public/images/right-agent.webp";
import { Star, StarFill } from "react-bootstrap-icons";
import HorizontalCard from "../../components/HorizontalCard";
import data from "../../components/AgentList.json";
import Pagination from "../../components/Pagination";

const index = () => {
  let PageSize = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const currentList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div>
      {/* Banner */}
      <Banner search background={EaListbanner}>
        <div className="bannerText">
          <h1>Enrolled Agent Listing</h1>
          <span>View all Tax Experts listings</span>
        </div>
      </Banner>

      {/* Enrolled Agent List */}
      <div className=" agentList container">
        <h1>Enrolled Agents</h1>
        {currentList.map((item) => {
          return (
            <HorizontalCard
              name={item.name}
              location={item.location}
              image={Dummy}
              numStars={item.review}
            />
          );
        })}
        <div className="d-flex container mt-4 findMore justify-content-between">
          <button>Find More Local EAs</button>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>

      {/* Find The Right Agent */}
      <div className=" findAgent">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 col-xl-6">
              <h1>Find the right Enrolled Agent for you</h1>
              <span>
                Why deal with a non-licensed Tax Expert for tax related affairs?
                We are here to connect you to a verified Tax Expert in your area
                that can handle your tax and Internal Revenue Service related
                issues. We will happily connect you to an Enrolled Agent for
                free.
              </span>
              <br />
              <button>Get started</button>
            </div>
            <div className="col-md-6 image col-xl-6">
              <Image src={LaptopMan} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
