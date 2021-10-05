
        import React from 'react'
        import Banner from '../../../components/Banner';
        import Image from 'next/image'
        import Man from '../../../public/images/card-man.png'
        import { Container, Row, Col } from 'react-bootstrap';
        import styles from '../../../styles/agents/AllStates.module.css'
        import Background from '../../../public/images/banners/ea-listing.png'
        import AgentLastSection from '../../../components/StartSection';
        import SelectCountry from '../../../components/SelectCountry'
        import Techman from '../../../public/images/right-agent.png';
        
        const index = () => {
            return (
                <div className={styles.agentList}>
                    <Banner background={Background} search={true} />
                    
                    <div className={styles.enrolled}>
              <Container>
                <Row>
                  <Col>
                    <h1 id={styles.enrol}>Enrolled Agent</h1>
                  </Col>
                  <Col>
                    <SelectCountry />
                  </Col>
                </Row>
                </Container>
                </div>
                <hr className={styles.line} />
        
                <div className={styles.agents}>
              <Container>
                <Row>
                  <Col sm>
                    <div className={styles.dummy}>
                        <div className={styles.icon}><Image src={Man} alt="An icon of one of the agents" /></div>
                        <div className={styles.dum}>
                            <h5 id={styles.texas}>Enrolled Dummy</h5>
                        <p>Texas</p>
                        </div>
                    </div>
                  </Col>
                  
                  <Col sm>
                  <div className={styles.dum}>
                  <div className={styles.ratings}>
                  <p id={styles.span}><span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span><span>&#9734;</span><span>&#9734;</span></p>
                        <p>3 reviews</p>
                        </div>
                        </div>
                  </Col>
                  <Col sm>
                  <div className={styles.dum}>
                    <div className={styles.btn}>
                        <button>View Profile</button>
                    </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <hr className={styles.line} />
        
            <div className={styles.agents}>
              <Container>
                <Row>
                  <Col sm>
                    <div className={styles.dummy}>
                        <div className={styles.icon}><Image src={Man} alt="An icon of one of the agents" /></div>
                        <div className={styles.dum}>
                            <h5 id={styles.texas}>Enrolled Dummy</h5>
                        <p>Texas</p>
                        </div>
                    </div>
                  </Col>
                  
                  <Col sm>
                  <div className={styles.dum}>
                  <div className={styles.ratings}>
                  <p id={styles.span}><span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span><span>&#9734;</span><span>&#9734;</span></p>
                        <p>3 reviews</p>
                        </div>
                        </div>
                  </Col>
                  <Col sm>
                  <div className={styles.dum}>
                    <div className={styles.btn}>
                        <button>View Profile</button>
                    </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <hr className={styles.line} />
        
            <div className={styles.agents}>
              <Container>
                <Row>
                  <Col sm>
                    <div className={styles.dummy}>
                        <div className={styles.icon}><Image src={Man} alt="An icon of one of the agents" /></div>
                        <div className={styles.dum}>
                            <h5 id={styles.texas}>Enrolled Dummy</h5>
                        <p>Texas</p>
                        </div>
                    </div>
                  </Col>
                  
                  <Col sm>
                  <div className={styles.dum}>
                  <div className={styles.ratings}>
                  <p id={styles.span}><span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span><span>&#9734;</span><span>&#9734;</span></p>
                        <p>3 reviews</p>
                        </div>
                        </div>
                  </Col>
                  <Col sm>
                  <div className={styles.dum}>
                    <div className={styles.btn}>
                        <button>View Profile</button>
                    </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* <hr className={styles.line} /> */}
        
        
            {/* <div className={styles.agents}> */}
            <div className={styles.agentsmiddle}>
              <Container>
                <Row>
                  <Col sm>
                    <div className={styles.dummy}>
                        <div className={styles.icon}><Image src={Man} alt="An icon of one of the agents" /></div>
                        <div className={styles.dum}>
                            <h5 id={styles.texas}>Enrolled Dummy</h5>
                        <p>Texas</p>
                        </div>
                    </div>
                  </Col>
                  
                  <Col sm>
                  <div className={styles.dum}>
                  <div className={styles.ratings}>
                  <p id={styles.span}><span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span><span>&#9734;</span><span>&#9734;</span></p>
                        <p>3 reviews</p>
                        </div>
                        </div>
                  </Col>
                  <Col sm>
                  <div className={styles.dum}>
                    <div className={styles.butt}>
                        <button>View Profile</button>
                    </div>
                    </div>
                  </Col>
                </Row>
              </Container>
              </div>
            {/* </div> */}
            {/* <hr className={styles.line} /> */}
        
            
            <div className={styles.agents}>
              <Container>
                <Row>
                  <Col sm>
                    <div className={styles.dummy}>
                        <div className={styles.icon}><Image src={Man} alt="An icon of one of the agents" /></div>
                        <div className={styles.dum}>
                            <h5 id={styles.texas}>Enrolled Dummy</h5>
                        <p>Texas</p>
                        </div>
                    </div>
                  </Col>
                  
                  <Col sm>
                  <div className={styles.dum}>
                  <div className={styles.ratings}>
                  <p id={styles.span}><span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span><span>&#9734;</span><span>&#9734;</span></p>
                        <p>3 reviews</p>
                        </div>
                        </div>
                  </Col>
                  <Col sm>
                  <div className={styles.dum}>
                    <div className={styles.btn}>
                        <button>View Profile</button>
                    </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <hr className={styles.line} />
        
            
            <div className={styles.agents}>
              <Container>
                <Row>
                  <Col sm>
                    <div className={styles.dummy}>
                        <div className={styles.icon}><Image src={Man} alt="An icon of one of the agents" /></div>
                        <div className={styles.dum}>
                            <h5 id={styles.texas}>Enrolled Dummy</h5>
                        <p>Texas</p>
                        </div>
                    </div>
                  </Col>
                  
                  <Col sm>
                  <div className={styles.dum}>
                  <div className={styles.ratings}>
                  <p id={styles.span}><span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span><span>&#9734;</span><span>&#9734;</span></p>
                        <p>3 reviews</p>
                        </div>
                        </div>
                  </Col>
                  <Col sm>
                  <div className={styles.dum}>
                    <div className={styles.btn}>
                        <button>View Profile</button>
                    </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <hr className={styles.line} />
        
            
            <div className={styles.agents}>
              <Container>
                <Row>
                  <Col sm>
                    <div className={styles.dummy}>
                        <div className={styles.icon}><Image src={Man} alt="An icon of one of the agents" /></div>
                        <div className={styles.dum}>
                            <h5 id={styles.texas}>Enrolled Dummy</h5>
                        <p>Texas</p>
                        </div>
                    </div>
                  </Col>
                  
                  <Col sm>
                  <div className={styles.dum}>
                  <div className={styles.ratings}>
                  <p id={styles.span}><span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span><span>&#9734;</span><span>&#9734;</span></p>
                        <p>3 reviews</p>
                        </div>
                        </div>
                  </Col>
                  <Col sm>
                  <div className={styles.dum}>
                    <div className={styles.btn}>
                        <button>View Profile</button>
                    </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <hr className={styles.line} />
        
        <div className={styles.locale}>
        <Container>
                <Row>
                  <Col>
                  <div className={styles.butn}>
            <button>Find More Local EAs <span id={styles.inner}>&#62;</span></button>
            </div>
                  </Col>
                  <Col>
                    <div className={styles.range}>
                      {/* <h1>Work in Progress....</h1> */}
                      {/* <div className={styles.sliderA}><span>&#60;</span></div><p><b>1</b></p> */}
                {/* <p id={styles.numba}>2 3 4 of 45</p>  */}
                {/* <div className={styles.sliderB}><span>&#62;</span></div> */}
           
                          </div>
                  </Col>
                </Row>
                </Container>
        </div>
        
        <div className={styles.lastdiv}>
                  <AgentLastSection image={Techman} alt="An icon of a man with a laptop" />
        </div>
        
                </div>
    )
}

export default index;
