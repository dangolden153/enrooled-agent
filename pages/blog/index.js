import React from "react";
import Image from "next/image";
import newsImage from "../../public/images/news.png";
import Dollar from "../../public/images/dollar-bill.png";
import NewsCard from "../../components/NewsCard";
import ArticleCard from "../../components/ArticleCard";

const demo = [
  {
    img: newsImage,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: newsImage,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: newsImage,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
];

const index = () => {
  return (
    <div className="container recent-article">
      <div className="article-head">
        <h1>News & Articles</h1>
      </div>

      <hr />

      <h4>Recent News</h4>

      <div className="row mb-5">
        <div className="col-md-6 col-xl-6">
          <div className=" mb-3">
            <Image height="560px" src={Dollar} />
            <div className="mt-5">
              <p className="">
                <small className="text-muted">24th September, 2021</small>
              </p>
              <h5 className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-6">
          {demo.map((news, index) => (
            <NewsCard
              key={index}
              img={news.img}
              title={news.title}
              link={news.link}
            />
          ))}
          <div className="text-end  all-news">
            <button>Load All News</button>
          </div>
        </div>
      </div>

      <hr />

      <div className="row mt-5 mb-5">
        <div className="col-md-8 col-xl-8 row border-end border-2">
          <h4 className="mb-4">Recent Articles</h4>
          {demo.map((news, index) => (
            <div className="col-md-6 col-xl-6 mb-3 ">
              <ArticleCard
                key={index}
                img={news.img}
                title={news.title}
                link={news.link}
              />
            </div>
          ))}
          <div className="text-start mb-5 ">
            <button>Load All Articles</button>
          </div>
        </div>
        <div className="col-md-4 col-xl-4 text-center">
          <h4 className="mb-4">Advertisement</h4>
          <div style={{ width: "92%" }} className="text-start ms-5 mb-3">
            <Image src={Dollar} />
            <div className="mt-3">
              <h5 className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </h5>
            </div>
          </div>
          <div style={{ width: "92%" }} className="text-start ms-5 mb-3">
            <Image src={Dollar} />
            <div className="mt-3">
              <h5 className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </h5>
            </div>
          </div>
          <div className=" text-center ">
            <button>View All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
