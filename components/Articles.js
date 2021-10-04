import CardList from "./CardList"
import ArticleCard from "./ArticleCard"
import React, { useState } from 'react'
import img from '../public/images/article.png'

const demo = [
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },
    {
        img: img,
        title: "Lorem Ipsum is simply dummy text of the...",
        link: "/"
    },

]
const Articles = () => {

    const getArticles = () => {
        return demo;
    }

    const articles = getArticles();

    const chunkify = () => {
        let _chunks = [];
        for (let i = 0; i < articles.length; i += 9) {
            _chunks.push(articles.slice(i, i + 9));
        }
        return _chunks;
    }

    const chunks = chunkify();

    const pages = chunks.length;

    const getCurrentPageArticles = (_page) => {
        return chunks[_page - 1];
    }

    const [page, setPage] = useState(1);
    const [currentArticles, setCurrentArticles] = useState(getCurrentPageArticles(page));



    const _setPage = (_page) => {
        if (_page >= 1 || _page <= pages) {
            setPage(_page)
            setCurrentArticles(getCurrentPageArticles(_page))
        }
    }

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1)
            setCurrentArticles(getCurrentPageArticles(page))
        }
    }

    const nextPage = () => {
        if (page < pages) {
            setPage(page + 1)
            setCurrentArticles(getCurrentPageArticles(page))
        }
    }

    const rangeInclusive = require('range-inclusive');

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="mb-5 w-100">
                <CardList>
                    {currentArticles.map((articles, index) => (
                        <ArticleCard
                            key={index}
                            img={articles.img}
                            title={articles.title}
                            link={articles.link}
                        />
                    ))}
                </CardList>
            </div>

            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        {
                            <button className='page-link' onClick={() => prevPage()}>
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        }
                    </li>
                    {
                        rangeInclusive(pages).map((_page, index) => (
                            <li key={index} className={`page-item ${page === _page ? 'active' : ''}`}>
                                <button key={index} className='page-link' onClick={() => _setPage(_page)}>
                                    {_page}
                                </button>
                            </li>
                        ))
                    }
                    <li className="page-item">
                        {
                            <button className='page-link' onClick={() => nextPage()}>
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        }
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Articles

