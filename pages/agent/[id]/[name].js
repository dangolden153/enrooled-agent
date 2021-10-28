import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { getSingleAgent } from "../../../src/redux/actions/agent";
import avatar from "../../../public/images/avatar.png";
import Spinner from "../../../public/spinner.gif";
import {
  fab,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../../styles/agents/viewagent.module.scss";

library.add(fab, faLinkedin);
library.add(fab, faFacebook);
library.add(fab, faTwitter);
library.add(fab, faInstagram);
// library.add(far, faUser);

const index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const agentData = useSelector((state) => state.getAgents.singleAgent.data);
  const [isLoading, setLoading] = useState(true);

  const handleGetAgent = async () => {
    const res = await dispatch(getSingleAgent(router.query));
    if (res) setLoading(false);
  };

  useEffect(() => {
    if (router.isReady) handleGetAgent();
  }, [router]);

  if (isLoading) {
    return <div className="container text-center"> <Image
                              src={Spinner}
                              alt="Page Loading..."
                              width="50px"
                              height="50px"
                            /></div>;
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
          content="Find a tax professional for your tax requirements. 
             Enrolled Agent has a list of verified tax practitioners. 
             Search from the lists of irs enrolled agent ."
        />
        <meta
          name="keywords"
          content="consulting,finance,advisor,consultant,business,service,insurance,agency"
        />
        <meta name="Enrolled Agent" content="Enrolled Agent" />

        <title>Enrolled Agent Lookup | Find Tax Preparer | IRS Enrolled Agent Search</title>
      </Head>
      <div className={styles.viewAgent}>
        <div className={styles.top}>
          {/* <Container> */}
          <div className={styles.left}>
            <div>
              <Image src={agentData?.image_url || avatar} alt="An icon of a lady" />
            </div>
            <div className={styles.info}>
              <p className={styles.personal}>
                <b>Personal Information</b>
              </p>
              <hr />
              {agentData?.showAddress ? (
                <div className={styles.contactDetails}>
                  <p id={styles.phone}>
                    <b>Address: </b>
                  </p>
                  <p id={styles.phone2}>{agentData?.address1}</p>
                </div>
              ): <></>}
              <div className={styles.contactDetails}>
                <p id={styles.phone}>
                  <b>Phone number: </b>
                </p>
                <p id={styles.phone2}>{agentData?.phone}</p>
              </div>

              <div className={styles.socialIcons}>
                <Link href={agentData?.facebook || "#"}>
                  <FontAwesomeIcon icon={["fab", "facebook-f"]} id={styles.icon} />
                </Link>
                <Link href={agentData?.twitter || "#"}>
                  <FontAwesomeIcon icon={["fab", "twitter"]} id={styles.icon} />
                </Link>
                <Link href={agentData?.linkedIn || "#"}>
                  <FontAwesomeIcon icon={["fab", "linkedin"]} id={styles.icon} />
                </Link>
                <Link href={agentData?.instagram || "#"}>
                  <FontAwesomeIcon icon={["fab", "instagram"]} id={styles.icon} />
                </Link>
              </div>

              <div className={`${styles.claim_button} text-center`}>
                  {agentData?.is_claimed ? 
                  <div className={styles.claimed}>
                  <Link href="" disabled>
                    <button>Listing Claimed</button>
                  </Link>
                </div>
                    :  
                   <div className={styles.not_claimed}>
                  <Link href={`/agent/claim-profile/${agentData?.id}/${agentData?.first_name}-${agentData?.last_name}`}>
                    <button>CLaim Listing</button>
                  </Link>
                </div>
                }
              </div>
              <div className={styles.buttons}>
              
                <div className={styles.butt}>
                  <Link href={agentData?.phone ? `tel:${agentData?.phone}` : "#"}>
                    <button>Call</button>
                  </Link>
                </div>
                {agentData?.allow_contact_message && (
                  <div className={styles.buton}>
                    <button>Message</button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* </Container> */}
          <div className={styles.rightDiv}>
            <div className={styles.right}>
              <div className={styles.topleft}>
                <div className={styles.claim}>
                  <h3 id={styles.agent_name}>
                    {agentData?.first_name} {agentData?.last_name}
                  </h3>
                  {agentData?.isClaimed && <p id={styles.agent_status}>(Claimed)</p>}
                </div>

                <div className={styles.btn}>
                  <button>Write a review</button>
                </div>
              </div>
              <p className={styles.expert}>
                <b>Enrolled Agent</b>
              </p>
              <div>
                <p id={styles.rank}>Ratings</p>
                <p className={styles.star}>
                  {agentData?.review ?? "0"}
                  <span className={styles.stars}>&#9734;</span>{" "}
                  <span className={styles.stars}>&#9734;</span>
                  <span className={styles.stars}>&#9734;</span>{" "}
                  <span className={styles.stars}>&#9734;</span>
                  <span className={styles.stars}>&#9734;</span>
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
                {agentData?.bio ? (

                  <p>{agentData?.bio}</p>
                  ) : (
                  
                  <p>
                  {agentData?.first_name} {agentData?.last_name} is an Enrolled Agent who operates in and around ELK GROVE. 
                  {agentData?.first_name} {agentData?.last_name} is admitted to practice unrestricted before the Internal Revenue Service and can represent clients throughout the United States. 
                  {agentData?.first_name} {agentData?.last_name} is an EnrolledAgent.com verified Enrolled Agent. 
                  Enrolled Agent status is the highest credential awarded by the Internal Revenue Service.
                  {agentData?.first_name} {agentData?.last_name}'s Enrolled Agent credential is recognized across all 50 US states.
                  </p>
                )}
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
                  <div className={styles.not_claimed}>
                  <Link href={`/agent/review/${agentData?.id}/${agentData?.first_name}-${agentData?.last_name}`}>
                    <button>Review Profile</button>
                  </Link>
                </div>
              <p>No Reviews Yet</p>
              {/* <div className={styles.word}>
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
                Jane is very professional, meticulous and pateint in getting my outstanding tax
                issues resolved. She helped put me at ease and did a all the heavy lifting in a very
                overwhelming case for me. She pays attention to details and will work tireless to
                get the best out of any situation.
              </p>
              <hr className={styles.border} />

              <div className={styles.seeAll}>
                <p>See all reviews</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default index;
