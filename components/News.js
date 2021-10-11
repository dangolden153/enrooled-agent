import NewsCard from "./NewsCard";
import React, { useState } from "react";
import img from "../public/images/news.png";
import CardListTwo from "./CardListTwo";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

const demo = [
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
  {
    img: img,
    title: "Lorem Ipsum is simply dummy text of the...",
    link: "/",
  },
];

const News = () => {
  const getNews = () => {
    return demo;
  };

  const news = getNews();

  const chunkify = () => {
    let _chunks = [];
    for (let i = 0; i < news.length; i += 6) {
      _chunks.push(news.slice(i, i + 6));
    }
    return _chunks;
  };

  const chunks = chunkify();

  const pages = chunks.length;

  const getCurrentPageNews = (_page) => {
    return chunks[_page - 1];
  };

  const [page, setPage] = useState(1);
  const [currentNews, setCurrentNews] = useState(getCurrentPageNews(page));

  const _setPage = (_page) => {
    if (_page >= 1 || _page <= pages) {
      setPage(_page);
      setCurrentNews(getCurrentPageNews(_page));
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      setCurrentNews(getCurrentPageNews(page));
    }
  };

  const nextPage = () => {
    if (page < pages) {
      setPage(page + 1);
      setCurrentNews(getCurrentPageNews(page));
    }
  };

  const rangeInclusive = require("range-inclusive");

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="mb-5 w-100">
        <CardListTwo>
          {currentNews.map((news, index) => (
            <NewsCard
              key={index}
              img={news.img}
              title={news.title}
              link={news.link}
            />
          ))}
        </CardListTwo>
      </div>

      <nav>
        <ul className="pagination-container">
          <li className="pagination-item">
            {
              <button
                className="page-link"
                onClick={() => prevPage()}
                disabled={page === 1}
              >
                <ChevronLeft />
              </button>
            }
          </li>
          {rangeInclusive(pages).map((_page, index) => (
            <li key={index} className="pagination-item">
              <button
                key={index}
                className={`page-link ${page === _page ? "active" : ""}`}
                onClick={() => _setPage(_page)}
              >
                {_page}
              </button>
            </li>
          ))}
          <li className="pagination-item">
            {
              <button
                className="page-link"
                onClick={() => nextPage()}
                disabled={page === pages}
              >
                <ChevronRight />
              </button>
            }
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default News;
