import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from '../../../styles/Articles/Articles.module.scss'
import Image from 'next/image'
import Dollar from '../../../public/images/dollar.png'
import ArticleText from '../../../components/ArticleText'
import Lady from '../../../public/images/card-woman.png'
import { Container, Row, Col } from 'react-bootstrap';
import Techie from '../../../public/images/techie.png'
import { getSingleArticle } from "../../../src/redux/actions/blog";
const index = () => {
      const router = useRouter();
  const dispatch = useDispatch();
  const articleData = useSelector((state) => state.articles.singleArticle);
  const [isLoading, setLoading] = useState(true);

    const handleGetArticle = async () => {
    const res = await dispatch(getSingleArticle(router.query));
    if (res) setLoading(false);
  };

  useEffect(() => {
    if (router.isReady) handleGetArticle();
  }, [router]);

  if (isLoading) {
    return <p>Loading</p>;
  }

    return (
        <>
        <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta charset="UTF-8" />
        <meta name="google" content="notranslate" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={`${articleData?.title}`}
        />
        <meta
          name="keywords"
          content={``}
        />
        <meta name="Enrolled Agent" content="Enrolled Agent" />

        <title>Enrolled Agent Lookup | Find Tax Preparer | IRS Enrolled Agent Search</title>
      </Head>
        <div className={styles.articles}>
            <div className={styles.topdiv}>
                <h1 className={styles.head}>{articleData?.title}</h1>
                <div className={styles.egent}>
                    <p>written by: <b>EnrolledAgent.com</b></p>
                </div>
            </div>

            <div className={styles.dollar}>
                <Image src={Dollar} alt="An icon of a dollar" />
                <p className={styles.september}>24th Septmber, 2021</p>
            </div>

            <Container>
                <Row>
                    <div className={styles.texts}>
                      
                    </div>
                </Row>
            </Container>

            <div><ArticleText articleBody={articleData} /></div>

            {/* <Container>
             
                    <div className={styles.comments}>
                        <h1 id={styles.coment}>Comments</h1>
                    </div>

                    <div className={styles.andrew}>
                        <div>
                            <Image src={Lady} alt="A laughing lady" />
                        </div>

                     
                        <div className={styles.fornia}>
                            <h6><b>Andrew Smith</b></h6>
                            <p>California</p>
                        </div>
                    </div>
                 
                    <div className={styles.andrew}>
                    <div id={styles.p}><p><u>Where does it come from?</u></p></div>
                    </div>
                    
                    <div className={styles.andrew}>
                        <div>
                            <Image src={Lady} alt="A laughing lady" />
                        </div>

                        
                        <div className={styles.fornia}>
                            <h6><b>Andrew Smith</b></h6>
                            <p>California</p>
                        </div>
                    </div>
                
                    <div className={styles.andrew}>
                    <div id={styles.p2}><p><u>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                        piece of classical Latin literature from 45 BC</u></p></div>
                </div>
          
            </Container> */}
{/* 
            <Container>
             
                <div className={styles.andrew}>
                    <div>
                        <input type="text" name="text" className={styles.box}></input>
                    </div>
                    </div>
                    <div className={styles.buttn}>
                        <button type="submit">Comment</button>
                    </div>
                    
             
            </Container> */}
            <hr className={styles.boundry} />

            <div className={styles.latest}>
                <h1><b>Latest News</b></h1>
            </div>

            <Container>
                <div className={styles.new}>
                    <div className={styles.dev}>
                        <div className={styles.tech}>
                            <Image src={Techie} alt="A developer" />
                        </div>
                        <p id={styles.p3}><b>Lorem Ipsum is simply dummy text of the printin.</b></p>
                        <div className={styles.load}>
                            <button type="submit"><b>Load news</b></button>
                        </div>
                    </div>

                    <div className={styles.dev}>
                        <div className={styles.tech}>
                            <Image src={Techie} alt="A developer" />
                        </div>
                        <p id={styles.p3}><b>Lorem Ipsum is simply dummy text of the printin.</b></p>
                        <div className={styles.load}>
                            <button type="submit"><b>Load news</b></button>
                        </div>
                    </div>

                    <div className={styles.dev}>
                        <div className={styles.tech}>
                            <Image src={Techie} alt="A developer" />
                        </div>
                        <p id={styles.p3}><b>Lorem Ipsum is simply dummy text of the printin.</b></p>
                        <div className={styles.load}>
                            <button type="submit"><b>Load news</b></button>
                        </div>
                    </div>
                </div>

                <div className={styles.buttn}>
                <button type="submit">Load all news</button>
            </div>
            </Container>

      
        </div>
    </>
    )
}

export default index

