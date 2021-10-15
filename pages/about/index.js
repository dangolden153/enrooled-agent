import React from "react";
import Aboutbanner from "../../public/images/banners/landing-page.png";
import Smiley from "../../public/images/smiley.png";
import Checked from "../../public/images/checked.png";
import Add from "../../public/images/add.png";
import Bookmark from "../../public/images/bookmark.png";
import Banner from "../../components/Banner";
import Image from "next/image";

const index = () => {
  return (
    <div className="about">
      {/* Banner */}
      <Banner background={Aboutbanner}>
        <div className="bannerText">
          <h1>
            Enrolled Agent <br /> About Us
          </h1>
        </div>
      </Banner>

      <div className=" about-text">
        <p className="text-muted">
EnrolledAgent.com is an online marketplace for tax professionals. Our goal is to create an environment where anyone can access licensed tax professionals with ease. We also seek to promote the Enrolled Agent brand and be a resource platform for all tax professionals.

EnrolledAgent.com LLC which owns EnrolledAgent.com is not affiliated with the Internal Revenue Service or any tax and accounting body.
        </p>
      </div>

      <div className="text-center funfact ">
        <h2 className="mb-5">See Our Awesome Funfacts</h2>
        <div className="row">
          <div className="col-md-6 col-xl-6 mb-4">
            <div className="card h-100 shadow-lg">
              <div className="card-body p-4">
                <div className="">
                  <Image src={Smiley} />
                </div>

                <h1>753</h1>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-6 mb-4">
            <div className="card h-100 shadow-lg">
              <div className="card-body p-4">
                <div>
                  <Image src={Checked} />
                </div>

                <h1>6</h1>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-6 mb-4">
            <div className="card h-100 ">
              <div className="card-body p-4">
                <div>
                  <Image src={Add} />
                </div>

                <h1>675</h1>
                <p>Enrolled Agents</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-6 mb-4">
            <div className="card h-100 shadow-lg">
              <div className="card-body p-4">
                <div>
                  <Image src={Bookmark} />
                </div>

                <h1>1,248</h1>
                <p>Resources and Articles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
