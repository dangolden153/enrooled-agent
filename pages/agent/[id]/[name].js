import React from 'react'
import Image from 'next/image'
import Smilie from '../../../public/images/PP.png'
// import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from '../../../styles/agents/agentdetails.module.css'

library.add(fab, faLinkedin);
library.add(fab, faFacebook);
library.add(fab, faTwitter);
library.add(fab, faInstagram);

const AgentDetails = () => {
    return (
<div className={styles.viewAgent}>
  
  <div className={styles.top}>
      {/* <Container> */}
      <div className={styles.left}>
          <div>
          <Image src={Smilie} alt="An icon of a lady" /></div>
          <div className={styles.info}>
              <p className={styles.personal}><b>Personal Information</b></p>
              <hr />
              <p><b>Address: </b>EVERGREEN, NC 28438</p>
              <p><b>Phone number</b>404-862-9929</p>
              
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
      {/* </Container> */}
      <div className={styles.right}>
          
          <div className={styles.topleft}>
              <div className={styles.claim}>
                  <h4>Jane Doe</h4><p>(Claimed)</p>
              </div>
              

              <div className={styles.btn}>
                  <button><u>Write a review</u></button>
              </div>

          </div>
          <p><b>Tax Professional Expert</b></p>
          <div>
                  <p>Ratings</p>
                  <p className={styles.stars}>8.7 <span>&#9733;</span> <span>&#9733;</span> 
                  <span>&#9733;</span> <span>&#9733;</span></p>
              </div>
      </div>
  </div>


</div>
    )
}
export default AgentDetails