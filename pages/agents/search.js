import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/agents/AllStates.module.scss";
import Background from "../../public/images/banners/ea-listing.png";
import AgentLastSection from "../../components/StartSection";
import SelectCountry from "../../components/SelectCountry";
import Techman from "../../public/images/right-agent.png";
import Spinner from "../../public/spinner.gif";
import { useRouter } from "next/router"; 
import { useDispatch, connect, useSelector } from "react-redux";
import { searchAgent } from "../../src/redux/actions/agent";
import { selectAgents } from "../../src/redux/reducers/agent";
import avatar from "../../public/images/avatar.png";
import dynamic from 'next/dynamic'
const ReactPaginate = dynamic(
  () => import ('react-paginate'),
  { ssr: false }
)
const Search = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  //const searchData = useSelector((state) => state.getAgents.searchAgents);
  const [isLoading, setLoading] = useState(true);
 const [pagination, setPagination] = useState({
    data: props.agents,
    offset: 0,
    numberPerPage: 10,
    pageCount: 0,
    currentData: []
  });
    const handleSearch = async () => {
    const res = await dispatch(searchAgent(router.query));
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
  if (router.isReady) handleSearch();
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

  return (
    <div className={styles.agentList}>
      <Banner background={Background} search={true}>
        <h1 className="banner-title">Enrolled Agents Listing</h1>
        <h6 className="banner-extra">View all Tax Expert Listings</h6>
      </Banner>

      {isLoading ? (
        <div className="container text-center"> <Image
                              src={Spinner}
                              alt="Page Loading..."
                              width="50px"
                              height="50px"
                            /></div>
      ) : (
        <>
          <div className={styles.enrolled}>
            <Container>
              <Row>
                <Col>
                  <h1 id={styles.enrol}>Enrolled Agent</h1>
                  <p>
                    Showing search results for{" "}
                    <span style={{ fontWeight: "700" }}>{router.query?.data}</span>
                  </p>
                </Col>
                <Col>
                  <SelectCountry />
                </Col>
              </Row>
            </Container>
          </div>
          <hr className={styles.line} />

          {props.agents.length > 0 ? (
            pagination.currentData && pagination.currentData.map((el, id) => (
              <>
                <div className={styles.agents}>
                  <Container>
                    <Row>
                      <Col sm>
                        <div className={styles.dummy}>
                          <div className={styles.icon}>
                            <Image
                              src={el?.image_url || avatar}
                              alt="An icon of one of the agents"
                              width="200px"
                              height="200px"
                            />
                          </div>
                          <div className={styles.dum}>
                            <h5 id={styles.texas}>
                              {el.first_name} {el.last_name}
                            </h5>
                            <p>{el.city}</p>
                          </div>
                        </div>
                      </Col>

                      <Col sm>
                        <div className={styles.dum}>
                          <div className={styles.ratings}>
                            <p id={styles.span}>
                              
                              <span>&#9734;</span>
                              <span>&#9734;</span>
                              <span>&#9734;</span>
                              <span>&#9734;</span>
                              <span>&#9734;</span>
                            </p>
                            <p>{el.review ?? "0"} reviews</p>
                          </div>
                        </div>
                      </Col>
                      <Col sm>
                        <div className={styles.dum}>
                          <div className={styles.btn}>
                            <button
                              type="button"
                              onClick={() =>
                                router.push(`/agent/${el.id}/${el.first_name}-${el.last_name}`)
                              }
                            >
                              View Profile
                            </button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <hr className={styles.line} />
              </>
            ))
          ) : (
            <p style={{ textAlign: "center" }}>
              Sorry, we couldn't find any results for {router.query?.data}
            </p>
          )}

          <div className={styles.locale}>
            <Container>
              <Row>
                <Col>
                  <div className={styles.butn}>
                    <button>Find More Local EAs</button>
                  </div>
                </Col>
                <Col>
                  {/* <div className={styles.range}>
                    <div className={styles.sliderA}>
                      <span>&#60;</span>
                    </div>
                    <p>
                      <b>1</b>
                    </p>
                    <p id={styles.numba}>2 3 4 of 45</p>
                    <div className={styles.sliderB}>
                      <span>&#62;</span>
                    </div>
                  </div> */}
                      <ReactPaginate
                      previousLabel={'previous'}
                      nextLabel={'next'}
                      breakLabel={'...'}
                      //pageCount={pagination.pageCount}
                      marginPagesDisplayed={5}
                      pageRangeDisplayed={5}
                      onPageChange={handlePageClick}
                      containerClassName={'pagination'}
                      activeClassName={'active'}/>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}

      <div className={styles.lastdiv}>
        <AgentLastSection image={Techman} alt="An icon of a man with a laptop" />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  agents: selectAgents(state)
});
export default connect(mapStateToProps)(Search);
