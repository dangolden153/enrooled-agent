import React from 'react'
import styles from '../../styles/blog/SingleNews.module.css'
import Image from 'next/image'
import Dollar from '../../public/images/dollars.png'
import ArticleText from '../../components/ArticleText'
import Lady from '../../public/images/card-woman.png'
import { Container, Row, Col } from 'react-bootstrap';
import Techie from '../../public/images/techie.png'
const index = () => {
    return (
        <div className={styles.articles}>
            <div className={styles.topdiv}>
                <h1 className={styles.head}>Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. </h1>
                <div className={styles.egent}>
                    <p>written by: <b>Egent enrolled News</b></p>
                </div>
            </div>

            <div className={styles.dollar}>
                <Image src={Dollar} alt="An icon of a dollar" />
                <p className={styles.september}>24th Septmber, 2021</p>
            </div>

            <Container>
                <Row>
                    <div className={styles.texts}>
                        <p><b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s,</b></p>
                        <hr />
                    </div>
                </Row>
            </Container>

            <div><ArticleText /></div>

            <Container>
                {/* <Row> */}
                    <div className={styles.comments}>
                        <h1 id={styles.coment}>Comments</h1>
                    </div>

                    <div className={styles.andrew}>
                        <div>
                            <Image src={Lady} alt="A laughing lady" />
                        </div>

                        {/* <div className={styles.smith}> */}
                        <div className={styles.fornia}>
                            <h6><b>Andrew Smith</b></h6>
                            <p>California</p>
                        </div>
                    </div>
                    {/* </div> */}
                    <div className={styles.andrew}>
                    <div id={styles.p}><p><u>Where does it come from?</u></p></div>
                    </div>
                    
                    <div className={styles.andrew}>
                        <div>
                            <Image src={Lady} alt="A laughing lady" />
                        </div>

                        {/* <div className={styles.smith}> */}
                        <div className={styles.fornia}>
                            <h6><b>Andrew Smith</b></h6>
                            <p>California</p>
                        </div>
                    </div>
                    {/* </div> */}
                    <div className={styles.andrew}>
                    <div id={styles.p2}><p><u>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                        piece of classical Latin literature from 45 BC</u></p></div>
                </div>
                {/* </Row> */}
            </Container>

            <Container>
                {/* <Row> */}
                <div className={styles.andrew}>
                    <div>
                        <input type="text" name="text" className={styles.box}></input>
                    </div>
                    </div>
                    <div className={styles.buttn}>
                        <button type="submit">Comment</button>
                    </div>
                    
                {/* </Row> */}
            </Container>
            <hr className={styles.boundry} />

            <div className={styles.latest}>
                <h1><b>Latest News</b></h1>
            </div>

            <Container>
                <div className={styles.new}>

                    <div className={styles.newDev}>

                    <div className={styles.devColor}>
                        <div className={styles.tech}>
                            <Image src={Techie} alt="A developer" />
                        </div>
                       <div className={styles.devText}>
                       <p id={styles.p3}><b>Lorem Ipsum is simply dummy text of the printin.</b></p>
                        <div className={styles.loadColor}>
                            <button type="submit"><b>Load news</b></button>
                        </div>
                       </div>
                       </div>
                  
                    <div className={styles.dev}>
                        <div className={styles.tech}>
                            <Image src={Techie} alt="A developer" />
                        </div>
                        <div className={styles.devText}>
                        <p id={styles.p3}><b>Lorem Ipsum is simply dummy text of the printin.</b></p>
                        <div className={styles.load}>
                            <button type="submit"><b>Load news</b></button>
                        </div>
                        </div>
                    </div>
                     </div>

            <div className={styles.newdev2}>
                     <div className={styles.dev}>
                        <div className={styles.tech}>
                            <Image src={Techie} alt="A developer" />
                        </div>
                        <div className={styles.devText}>
                        <p id={styles.p3}><b>Lorem Ipsum is simply dummy text of the printin.</b></p>
                        <div className={styles.load}>
                            <button type="submit"><b>Load news</b></button>
                        </div>
                        </div>
                    </div>

                    
                    <div className={styles.dev}>
                        <div className={styles.tech}>
                            <Image src={Techie} alt="A developer" />
                        </div>
                        <div className={styles.devText}>
                        <p id={styles.p3}><b>Lorem Ipsum is simply dummy text of the printin.</b></p>
                        <div className={styles.load}>
                            <button type="submit"><b>Load news</b></button>
                        </div>
                        </div>
                    </div>
                    </div>

              

                <div className={styles.buttn}>
                <button type="submit">Load all news</button>
            </div>
         
            </Container>

      
        </div>
      </div>
    </div>
  );
};

export default index


