import React,{useState, useEffect} from "react";
import {useSelector, useDispatch, connect} from "react-redux";
import {useRouter} from "next/router";
import Card from "../../../components/Card";
import {getAllArticles} from "../../../src/redux/actions/blog";
import {selectArticles} from "../../../src/redux/reducers/blog";
import Dollar from "../../../public/images/dollar-bill.png";
import Techie from "../../../public/images/techie.png";
import Image from "next/image";
import styles from "../../../styles/blog/NewsAndArticles.module.scss";
import Link from "next/link";
import ReactPaginate from 'react-paginate';
const index = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  //const articles = useSelector((state) => state.articles.articles);
  const [loading, setLoading] = useState(false);
   const [pagination, setPagination] = useState({
    data: props.articles,
    offset: 0,
    numberPerPage: 10,
    pageCount: 0,
    currentData: []
  });
  console.log("ar",props.articles);
  const handleArticlesLoad = async () => {
    const res = await dispatch(getAllArticles());
    console.log("res",res);
    if (res) setLoading(false);
      setPagination({
        data: res,
        offset: 0,
        numberPerPage: 10,
        pageCount: res.length / pagination.numberPerPage,
        currentData: res.slice(0, 10)
      });
  };
  useEffect(() => {
  if (router.isReady) handleArticlesLoad();
  },[router]);

  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageCount: prevState.data.length / prevState.numberPerPage,
      currentData: prevState.data.slice(pagination.offset, pagination.offset + pagination.numberPerPage),
      }))   
  }, [pagination.numberPerPage, pagination.offset]);


  const handlePageClick = event => {
    const selected = event.selected;
    const offset = selected * pagination.numberPerPage
    console.log("offset",pagination.currentData);
    setPagination({ ...pagination, offset })
  }
 console.log("pa",pagination.currentData);
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

          {pagination.currentData && pagination.currentData.map((article, index) => {
            return (
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
                    <b>{article?.title}</b>
                  </p>
                  <div className="">
                    <button className="btn">
                      <b>Load news</b>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
              <div className={styles.buttn}>
                    <ReactPaginate
                      previousLabel={'previous'}
                      nextLabel={'next'}
                      breakLabel={'...'}
                      pageCount={pagination.pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={handlePageClick}
                      containerClassName={'pagination'}
                      activeClassName={'active'}
      />
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
                {pagination.currentData && pagination.currentData.map((article, index) => {
                return (
                <div className="col-md-6" key={index}>
                  <Card className={styles.cardArticle}>
                    <div className="article-image">
                      <Image src={Techie} width="300" height="200" />
                    </div>
                    <div className="card-article-body">
                      <p>{article?.title}</p>
                      <Link href={`/blog/${article.id}/${article.slug}`}><button className="btn "> Read </button></Link>
                    </div>
                  </Card>
                </div>
                  )
                })}
                <div className={`${styles.buttn} text-start mt-3`}>
                  <ReactPaginate
                      previousLabel={'previous'}
                      nextLabel={'next'}
                      breakLabel={'...'}
                      pageCount={pagination.pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={handlePageClick}
                      containerClassName={'pagination'}
                      activeClassName={'active'}
      />
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
              <p>No Adverts</p>
              {/* <Card className={styles.cardArticle}>
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  articles: selectArticles(state)
});
export default connect(mapStateToProps)(index);
