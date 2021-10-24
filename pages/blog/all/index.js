import React from "react";
import Card from "../../../components/Card";

import Dollar from "../../../public/images/dollar-bill.png";
import Techie from "../../../public/images/techie.png";
import Image from "next/image";
import styles from "../../../styles/blog/NewsAndArticles.module.scss";

const index = () => {
  return (
    <div className={`container ${styles.newsAndArticles}`}>
      <div className={`${styles.header} d-flex flex-column`}>
        <h1>News & Articles</h1>
        <hr />
        <h4>Recent News</h4>
      </div>

      <div className="row  ">
        <div
          style={{ border: "none !important", boxShadow: "none !important" }}
          className="col-md-7 card"
        >
          <div className="card-body">
            <Image src={Dollar} />
            <div className="mb-1 mt-1">
              <p className="text-muted">24th September, 2021</p>
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </h4>
            </div>
          </div>
        </div>
        <div
          style={{ border: "none !important", boxShadow: "none !important" }}
          className="col-md-5 card"
        >
          <div className="card-body">
            <div className={styles.newdev2}>
              <div className={styles.dev}>
                <div className={styles.tech}>
                  <Image
                    height={160}
                    width={190}
                    src={Techie}
                    alt="A developer"
                  />
                </div>
                <div className={`ms-3 ${styles.devText}`}>
                  <p id={styles.p3}>
                    <b>Lorem Ipsum is simply dummy text of the printin.</b>
                  </p>
                  <div className="">
                    <button className="btn">
                      <b>Load news</b>
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.dev}>
                <div className={styles.tech}>
                  <Image
                    height={160}
                    width={190}
                    src={Techie}
                    alt="A developer"
                  />
                </div>
                <div className={`ms-3 ${styles.devText}`}>
                  <p id={styles.p3}>
                    <b>Lorem Ipsum is simply dummy text of the printin.</b>
                  </p>
                  <div className="">
                    <button className="btn">
                      <b>Load news</b>
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.dev}>
                <div className={styles.tech}>
                  <Image
                    height={160}
                    width={190}
                    src={Techie}
                    alt="A developer"
                  />
                </div>
                <div className={`ms-3 ${styles.devText}`}>
                  <p id={styles.p3}>
                    <b>Lorem Ipsum is simply dummy text of the printin.</b>
                  </p>
                  <div className="">
                    <button className="btn">
                      <b>Load news</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.buttn}>
                <button className="btn">Load all news</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.header} d-flex flex-column`}>
        <hr />
        <div className="row">
          <div
            style={{
              borderLeft: "none !important",
              borderTop: "none !important",
              borderBottom: "none !important",
              boxShadow: "none !important",
            }}
            className="card col-md-8"
          >
            <div className="card-body">
              <h4>Recent Articles</h4>
              <div className="row">
                <div className="col-md-6">
                  <Card className={styles.cardArticle}>
                    <div className="article-image">
                      <Image src={Techie} width="300" height="200" />
                    </div>
                    <div className="card-article-body">
                      <p>Lorem Ipsum is simply dummy text of the printin. </p>
                      <button className="btn "> Load More </button>
                    </div>
                  </Card>
                </div>
                <div className="col-md-6">
                  <Card className={styles.cardArticle}>
                    <div className="article-image">
                      <Image src={Techie} width="300" height="200" />
                    </div>
                    <div className="card-article-body">
                      <p>Lorem Ipsum is simply dummy text of the printin. </p>
                      <button className="btn "> Load More </button>
                    </div>
                  </Card>
                </div>
                <div className="col-md-6">
                  <Card className={styles.cardArticle}>
                    <div className="article-image">
                      <Image src={Techie} width="300" height="200" />
                    </div>
                    <div className="card-article-body">
                      <p>Lorem Ipsum is simply dummy text of the printin. </p>
                      <button className="btn "> Load More </button>
                    </div>
                  </Card>
                </div>
                <div className="col-md-6">
                  <Card className={styles.cardArticle}>
                    <div className="article-image">
                      <Image src={Techie} width="300" height="200" />
                    </div>
                    <div className="">
                      <p>Lorem Ipsum is simply dummy text of the printin. </p>
                      <button className="btn "> Load More </button>
                    </div>
                  </Card>
                </div>
                <div className={`${styles.buttn} text-start mt-3`}>
                  <button className="btn">Load all news</button>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              border: "none !important",
              boxShadow: "none !important",
            }}
            className="card col-md-4"
          >
            <div className="card-body">
              <h4 className="">Advertisement</h4>
              <Card className={styles.cardArticle}>
                <div className="article-image">
                  <Image src={Techie} />
                </div>
                <div className=" mb-3">
                  <h4>Lorem Ipsum is simply dummy text of the printin. </h4>
                </div>
              </Card>
              <Card className={styles.cardArticle}>
                <div className="article-image">
                  <Image src={Techie} />
                </div>
                <div className=" mb-3">
                  <h4>Lorem Ipsum is simply dummy text of the printin. </h4>
                </div>
              </Card>
              <div className={`${styles.buttn2} text-start mt-3`}>
                <button className="btn">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
