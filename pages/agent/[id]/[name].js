import React,{useState} from "react";
import {useSelector, shallowEqual} from "react-redux";
import Image from "next/image";
import Smilie from "../../../public/images/PP.png";
import Head from "next/head";
// import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebook,
  faInstagram,
  faLinkedin, 
  //   faUser,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../../styles/agents/viewagent.module.scss";

library.add(fab, faLinkedin);
library.add(fab, faFacebook);
library.add(fab, faTwitter);
library.add(fab, faInstagram);
// library.add(far, faUser);

const index = () => {

  return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
            <meta charset="UTF-8" />
            <meta name="google" content="notranslate" />
            <meta httpEquiv="Content-Language" content="en" />
            <meta name="description" 
            content="Find a tax professional for your tax requirements. 
             Enrolled Agent has a list of verified tax practitioners. 
             Search from the lists of irs enrolled agent ." />
            <meta name="keywords"
                content="consulting,finance,advisor,consultant,business,service,insurance,agency" />
            <meta name="Enrolled Agent" content="Enrolled Agent" />

            <title>Enrolled Agent Lookup | Find Tax Preparer |  IRS Enrolled Agent Search</title>
        </Head>
    <div className={styles.viewAgent}>
      <div className={styles.top}>
        {/* <Container> */}
        <div className={styles.left}>
          <div>
            <Image src={Smilie} alt="An icon of a lady" />
          </div>
          <div className={styles.info}>
            <p className={styles.personal}>
              <b>Personal Information</b>
            </p>
            <hr />
            <div className={styles.contactDetails}>
              <p id={styles.phone}>
                <b>Address: </b>
              </p>
              <p id={styles.phone2}>EVERGREEN, NC 28438</p>
            </div>
            <div className={styles.contactDetails}>
              <p id={styles.phone}>
                <b>Phone number: </b>
              </p>
              <p id={styles.phone2}>404-862-9929</p>
            </div>

            <div className={styles.socialIcons}>
              <FontAwesomeIcon icon={["fab", "facebook-f"]} id={styles.icon} />
              <FontAwesomeIcon icon={["fab", "twitter"]} id={styles.icon} />
              <FontAwesomeIcon icon={["fab", "linkedin"]} id={styles.icon} />
              <FontAwesomeIcon icon={["fab", "instagram"]} id={styles.icon} />
            </div>

            <div className={styles.buttons}>
              <div className={styles.butt}>
                <button>Call</button>
              </div>
              <div className={styles.buton}>
                <button>Message</button>
              </div>
            </div>
          </div>
        </div>
        {/* </Container> */}
        <div className={styles.rightDiv}>
          <div className={styles.right}>
            <div className={styles.topleft}>
              <div className={styles.claim}>
                <h3 id={styles.agent_name}>Jane Doe</h3>
                <p id={styles.agent_status}>(Claimed)</p>
              </div>

              <div className={styles.btn}>
                <button>
                  Write a review
                </button>
              </div>
            </div>
            <p className={styles.expert}>
              <b>Tax Professional</b>
            </p>
            <div>
              <p id={styles.rank}>Ratings</p>
              <p className={styles.star}>
                8.7 <span className={styles.stars}>&#9733;</span>{" "}
                <span className={styles.stars}>&#9733;</span>
                <span className={styles.stars}>&#9733;</span>{" "}
                <span className={styles.stars}>&#9733;</span>
              </p>
            </div>
          </div>
          {/* <div>
<p>what is going on here?</p>
      </div> */}
          <div className={styles.right}>
            <div className={styles.detail}>
              <p id={styles.detailA}>
                <u>About</u>
              </p>
              <p id={styles.detailB}>Enrolled Agent Details</p>
            </div>
            <div id={styles.line}>
              <hr />
            </div>

            <div className={styles.enroledDetail}>
              <p>
                Jane Doe is an Enrolled Agent who operates in and around
                EVERGREEN. Jane Doe is admitted to practice unrestricted before
                the Internal Revenue Service and can represent clients
                throughout the United States. Jane Doe is an EnrolledAgent.com
                verified Enrolled Agent. Enrolled Agent status is the highest
                credential awarded by the Internal Revenue Service. Jane Doe is
                Enrolled Agent credential is recognized across all 50 US states.
              </p>
            </div>
          </div>

          <div className={styles.bottomDiv}>
            <div className={styles.client}>
              <p id={styles.reviewed}>
                <u>Client Reviews</u>
              </p>
              <p>
                Sort by: <b>Rating</b>
              </p>
            </div>
            <div className={styles.word}>
              <div>
                <p>Nyla Word</p>
                <p className={styles.rate}>
                  <span className={styles.stars}>&#9733;</span>{" "}
                  <span className={styles.stars}>&#9733;</span>{" "}
                  <span className={styles.stars}>&#9733;</span>
                  <span className={styles.stars}>&#9733;</span>
                </p>
              </div>
              <p id={styles.dates}>30 October 2021</p>
            </div>
            <p className={styles.p3}>
              Jane is very professional, meticulous and pateint in getting my
              outstanding tax issues resolved. She helped put me at ease and did
              a all the heavy lifting in a very overwhelming case for me. She
              pays attention to details and will work tireless to get the best
              out of any situation.
            </p>
            <hr className={styles.border} />

            <div className={styles.word}>
              <div>
                <p>Ryan Richards</p>
                <p className={styles.rate}>
                  <span className={styles.stars}>&#9733;</span>{" "}
                  <span className={styles.stars}>&#9733;</span>{" "}
                  <span className={styles.stars}>&#9733;</span>
                  <span className={styles.stars}>&#9733;</span>
                </p>
              </div>
              <p id={styles.dates}>29 October 2021</p>
            </div>
            <p className={styles.p3}>
              Jane is very professional, meticulous and pateint in getting my
              outstanding tax issues resolved. She helped put me at ease and did
              a all the heavy lifting in a very overwhelming case for me. She
              pays attention to details and will work tireless to get the best
              out of any situation.
            </p>
            <hr className={styles.border} />

            {/* <div className={styles.client}> */}
            {/* <p><u>Client Reviews</u></p> */}
            {/* <p>Sort by: <b>Rating</b></p> */}
            {/* </div> */}
            <div className={styles.word}>
              <div>
                <p>Nyla Word</p>
                <p className={styles.rate}>
                  <span className={styles.stars}>&#9733;</span>{" "}
                  <span className={styles.stars}>&#9733;</span>{" "}
                  <span className={styles.stars}>&#9733;</span>
                  <span className={styles.stars}>&#9733;</span>
                </p>
              </div>
              <p id={styles.dates}>25 October 2021</p>
            </div>
            <p className={styles.p3}>
              Jane is very professional, meticulous and pateint in getting my
              outstanding tax issues resolved. She helped put me at ease and did
              a all the heavy lifting in a very overwhelming case for me. She
              pays attention to details and will work tireless to get the best
              out of any situation.
            </p>
            <hr className={styles.border} />
            <div className={styles.seeAll}>
              <p>See all reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default index;
