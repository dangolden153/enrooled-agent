import Image from "next/image";
import Smilie from "../../../public/images/PP.png";
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
// import styles from "../../../styles/agents/viewagent.module.scss";
import styles from "../../../styles/agents/ClaimProfile.module.scss";
library.add(fab, faLinkedin);
library.add(fab, faFacebook);
library.add(fab, faTwitter);
library.add(fab, faInstagram);

const ClaimProfile = () => {
  return (
    <div className="container">
      <div className={` row ${styles.container}`}>
        <div className="col-md-4">
          <div>
            <Image src={Smilie} alt="An icon of a lady" />
          </div>
          <div className={styles.info}>
            <p className="border-bottom">Personal Information</p>

            <div className={styles.contactDetails}>
              <p id={styles.phone}>
                Address: <span className="text-muted">EVERGREEN, NC 28438</span>
              </p>
            </div>
            <div className={styles.contactDetails}>
              <p id={styles.phone}>
                Phone number: <span className="text-muted">404-862-9929</span>
              </p>
            </div>

            <div className="d-flex justify-content-between me-5">
              <FontAwesomeIcon
                icon={["fab", "facebook-f"]}
                className={styles.icon}
              />
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                className={styles.icon}
              />
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className={styles.icon}
              />
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                className={styles.icon}
              />
            </div>

            <div className={styles.buttons}>
              <button className={`btn ${styles.btn1}`}>Call</button>

              <button className={`btn ${styles.btn2}`}>Message</button>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <p
                style={{
                  fontWeight: "600",
                  marginBottom: "27px",
                  fontSize: "23px",
                }}
              >
                Congratulations: You are about to claim this listing!
              </p>
              <p>
                Once your claim has been accepted, you will be able to update
                your listing details, answer tax questions for new client leads,
                create articles to attract clients, and more. To proceed with
                your claim, please complete the form below and click{" "}
                <span className="text-primary fw-bold">"Claim Listing"</span> to
                get started.
              </p>

              <div className={styles.form}>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label required className="form-control-label  ">
                      Job Role<span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-control-label ">
                      Company Name<span className="text-danger">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-control-label ">
                      Company Size<span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Company Size</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-control-label ">
                      Organization Type<span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Organization Type</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-control-label ">
                      Company Revenue<span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Company Revenue</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-control-label ">
                      Annual Tax Returns<span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Annual Tax Returns</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="text-center mb-4">
                <button className={`btn ${styles.btn3}`}>Claim Listing</button>
              </div>
              <div className="text-center">
                <input type="checkbox" />
                <span className="ms-3">
                  I agree to the{" "}
                  <span className="text-primary">terms of use</span> and{" "}
                  <span className="text-primary">privacy policy</span>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimProfile;
