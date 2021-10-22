import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/agents/AllStates.module.scss";
import Background from "../../public/images/banners/ea-listing.png";
import AgentLastSection from "../../components/StartSection";
import SelectCountry from "../../components/SelectCountry";
import Techman from "../../public/images/right-agent.png";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { cityAgent } from "../../src/redux/actions/agent";
import avatar from "../../public/images/avatar.png";

const index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.getAgents.cityAgents);
  const [isLoading, setLoading] = useState(true);

  console.log(searchData);


  const handleSearch = async () => {
    const res = await dispatch(cityAgent(router.query));
    if (res) setLoading(false);
  };

  useEffect(() => {
    if (router.isReady) handleSearch();
  }, [router]);

  return (
    <div className={styles.agentList}>
      <Banner background={Background} search={true}>
        <h1 className="banner-title">Enrolled Agents Listing</h1>
        <h6 className="banner-extra">View all Tax Expert Listings</h6>
      </Banner>

      {isLoading ? (
        <p>page loading</p>
      ) : (
        <>
          <div className={styles.enrolled}>
            <Container>
              <Row>
                <Col>
                  <h1 id={styles.enrol}>Enrolled Agent</h1>
                  <p>
                    Showing search results for{" "}
                    <span style={{ fontWeight: "700" }}>
                      {router.query?.city}
                    </span>
                  </p>
                </Col>
                <Col>
                  <SelectCountry />
                </Col>
              </Row>
            </Container>
          </div>
          <hr className={styles.line} />

          {searchData.length > 0 ? (
            searchData.map((el, id) => (
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
                              <span>&#9733;</span> <span>&#9733;</span>{" "}
                              <span>&#9733;</span>
                              <span>&#9734;</span>
                              <span>&#9734;</span>
                            </p>
                            <p>3 reviews</p>
                          </div>
                        </div>
                      </Col>
                      <Col sm>
                        <div className={styles.dum}>
                          <div className={styles.btn}>
                            <button
                              type="button"
                              onClick={() =>
                                router.push(
                                  `/agent/${el.id}/${el.first_name}-${el.last_name}`,
                                )
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
              Sorry, we couldn't find any results for {router.query?.lName}
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
                  <div className={styles.range}>
                    {/* <h1>Work in Progress....</h1> */}
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
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}

      <div className={styles.lastdiv}>
        <AgentLastSection
          image={Techman}
          alt="An icon of a man with a laptop"
        />
      </div>
    </div>
  );
};

export default index;
