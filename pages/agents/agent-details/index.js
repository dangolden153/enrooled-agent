import React, { useState } from 'react'
import Image from 'next/image'
import Smilie from '../../../public/images/PP.png'
// import styled from 'styled-components';
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
import styles from '../../../styles/agents/viewagent.module.scss'

library.add(fab, faLinkedin);
library.add(fab, faFacebook);
library.add(fab, faTwitter);
library.add(fab, faInstagram);
// library.add(far, faUser);

const index = () => {
    const [selected, setSelected] = useState("");
    function getSelected(id) {
        setSelected(id)
    }

    return (
        <div className={styles.viewAgent}>
            {/* // <div className='page-layout viewAgent container-fluid'> */}

            <div className={styles.top}>
                <div className="col">
                    <div className={styles.left}>
                        <div>
                            <Image src={Smilie} alt="An icon of a lady" /></div>
                        <div className={styles.info}>
                            <p className={styles.personal}><b>Personal Information</b></p>
                            <hr />
                            <div className={styles.contactDetails}><p id={styles.phone}><b>Address: </b></p><p id={styles.phone2}>EVERGREEN, NC 28438</p></div>
                            <div className={styles.contactDetails}><p id={styles.phone}><b>Phone number: </b></p>
                                <p id={styles.phone2}>404-862-9929</p></div>

                            <div className={styles.socialIcons}>
                                <FontAwesomeIcon
                                    icon={["fab", "facebook-f"]} id={styles.icon} />
                                <FontAwesomeIcon icon={["fab", "twitter"]} id={styles.icon} />
                                <FontAwesomeIcon icon={["fab", "linkedin"]} id={styles.icon} />
                                <FontAwesomeIcon icon={["fab", "instagram"]} id={styles.icon} />
                            </div>

                            <div className={styles.buttons}>
                                <div className={styles.butt}><button>Call</button></div>
                                <div className={styles.buton}><button>Message</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={styles.rightDiv}>
                        <div className={styles.right}>

                            <div className={styles.topleft}>
                                <div className={styles.claim}>
                                    <h3 id={styles.jane}>Jane Doe</h3><p id={styles.doe}><i>(Claimed)</i></p>
                                </div>


                                <div className={styles.btn}>
                                    <button><u>Write a review</u></button>
                                </div>

                            </div>
                            <p className={styles.expert}><b>Tax Professional Expert</b></p>
                            <div>
                                <p id={styles.rank}>Rankings</p>
                                <p className={styles.star}>8.7 <span className={styles.stars}>&#9733;</span> <span className={styles.stars}>&#9733;</span>
                                    <span className={styles.stars}>&#9733;</span>  <span className={styles.stars}>&#9733;</span> <span className={styles.stars}>&#9733;</span></p>
                            </div>
                        </div>

                        <div className={styles.right}>
                            <div className={styles.selected === "1" ? "selected" : "userIcon"} id="1" onClick={() => getSelected("1")}>

                                <div className={styles.detail}>
                                    <p id={styles.detailA}><u>About</u></p>
                                    <p id={styles.detailB}>Agent Details</p>
                                </div>
                            </div>
                            <div id={styles.line}><hr /></div>

                            <div className={styles.enroledDetail}>
                                <p>Jane Doe is an Enrolled Agent who operates in and around EVERGREEN.
                                    Jane Doe is admitted to practice unrestricted before the Internal
                                    Revenue Service and can represent clients throughout the United States. Jane Doe is an EnrolledAgent.com verified Enrolled Agent. Enrolled Agent status is the highest credential awarded by the Internal Revenue Service.
                                    Jane Doe is Enrolled Agent credential is recognized across all 50 US states.</p>
                            </div>
                        </div>

                        <div className={styles.bottomDiv}>
                            <div className={styles.client}>
                                <p id={styles.reviewed}><u>Client Reviews</u></p>

                                <select className={styles.drops}>
                                    <option id={styles.option1} value="Sort by: Rating">Sort by: Rating</option>
                                    <option id={styles.dropdown} value="Good">Good</option>
                                    <option id={styles.dropdown} value="Very good">Very good</option>
                                    <option id={styles.dropdown} value="Excellent">Excellent</option>
                                    <option id={styles.dropdown} value="Poor">Poor</option>
                                    <option id={styles.dropdown} value="Very poor">Very poor</option>
                                </select>


                                {/* <p>Sort by: <b>Rating</b></p> */}

                            </div>
                            <div className={styles.word}>
                                <div><p>Nyla Word</p>
                                    <p className={styles.rate}><span className={styles.stars}>&#9733;</span> <span className={styles.stars}>&#9733;</span> <span className={styles.stars}>&#9733;</span>
                                        <span className={styles.stars}>&#9733;</span> <span className={styles.stars}>&#9733;</span></p>
                                </div>
                                <p id={styles.dates}>30 October 2021</p>
                            </div>
                            <p className={styles.p3}>Jane is very professional, meticulous and pateint in getting
                                my outstanding tax issues resolved. She helped put me at ease and did a all the heavy lifting in a very overwhelming case for me. She pays attention to details and will work
                                tireless to get the best out of any situation.</p>
                            <hr className={styles.border} />

                            <div className={styles.word}>
                                <div><p>Ryan Richards</p>
                                    <p className={styles.rate}><span className={styles.stars}>&#9733;</span> <span className={styles.stars}>&#9733;</span> <span className={styles.stars}>&#9733;</span>
                                        <span className={styles.stars}>&#9733;</span> <span className={styles.stars}>&#9733;</span></p>
                                </div>
                                <p id={styles.dates}>29 October 2021</p>
                            </div>
                            <p className={styles.p3}>Jane is very professional, meticulous and pateint in getting
                                my outstanding tax issues resolved. She helped put me at ease and did a all the heavy lifting in a very overwhelming case for me. She pays attention to details and will work
                                tireless to get the best out of any situation.</p>
                            <hr className={styles.border} />

                            {/* <div className={styles.client}> */}
                            {/* <p><u>Client Reviews</u></p> */}
                            {/* <p>Sort by: <b>Rating</b></p> */}
                            {/* </div> */}
                            <div className={styles.word}>
                                <div><p>Nyla Word</p>
                                    <p className={styles.rate}><span className={styles.stars}>&#9733;</span>  <span className={styles.stars}>&#9733;</span><span className={styles.stars}>&#9733;</span> <span className={styles.stars}>&#9733;</span>
                                        <span className={styles.stars}>&#9733;</span></p>
                                </div>
                                <p id={styles.dates}>25 October 2021</p>
                            </div>
                            <p className={styles.p3}>Jane is very professional, meticulous and pateint in getting
                                my outstanding tax issues resolved. She helped put me at ease and did a all the heavy lifting in a very overwhelming case for me. She pays attention to details and will work
                                tireless to get the best out of any situation.</p>
                            <hr className={styles.border} />
                            <div className={styles.seeAll}>
                                <p>See all reviews</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}
export default index