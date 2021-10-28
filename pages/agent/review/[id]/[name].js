import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import Smilie from "../../../../public/images/PP.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import ReactStars from "react-rating-stars-component";
import {
  fab,
  faFacebook,
  faInstagram,
  faLinkedin,
  //   faUser,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import styles from "../../../styles/agents/viewagent.module.scss";
import styles from "../../../../styles/agents/ClaimProfile.module.scss";
import { getSingleAgent } from "../../../../src/redux/actions/agent";
import avatar from "../../../../public/images/avatar.png";
import { useToasts } from "react-toast-notifications";
import { reviewAgent } from "../../../../src/services/agent";
import style from "../../../../styles/agents/viewagent.module.scss";
library.add(fab, faLinkedin);
library.add(fab, faFacebook);
library.add(fab, faTwitter);
library.add(fab, faInstagram);
import { getSession } from "next-auth/client";
const Review = ({ session }) => {
  const { user } = session;
  const router = useRouter();
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const agentData = useSelector((state) => state.getAgents.singleAgent.data);
 const [ratingValue, setRatingValue] = useState(0);
     const starValue = {
       count: 5,
       value: ratingValue,
       a11y: true,
       emptyIcon: <span className={style.stars}>&#9734;</span>,
       filledIcon: <span className={style.stars}>&#9733;</span>,
       onChange: (e) => {
         setRatingValue(e);
         console.log("rating", starValue.value);
       },
     };
     
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    state: "",
    city: "",
    email: "",
    rating: "",
    review: "",
    agent_id: "",
  });
  const [loading, setLoading] = useState(true);
  const handleGetAgent = async () => {
    const res = await dispatch(getSingleAgent(router.query));
    if (res) setLoading(false);
  };

  useEffect(() => {
    if (router.isReady) handleGetAgent();
  }, [router]);

  if (loading) {
    return <p>Loading</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = {
        first_name: data.first_name,
        last_name: data.last_name,
        state: data.state,
        city: data.city,
        email: data.email,
        rating: `${ratingValue}`,
        review: data.review,
      agent_id: agentData.id,
    };
    console.log("agent id", formData);
    try {
      setLoading(true);
      let response = await reviewAgent(formData);
      if (response) {
        if (response.data) {
          addToast("Your claim request has been sent successfully!", {
            appearance: "success",
            autoDismiss: true,
          });
        }
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      addToast(
        `${
          error.response.msg
            ? error.response.msg
            : "An error occured. Please try again."
        }`,
        {
          appearance: "error",
          autoDismiss: true,
        },
      );
    }
  };
  return (
    <div className="container">
      <div className={` row ${styles.container}`}>
        <div className="col-md-4">
          <div>
            <Image
              src={agentData?.image_url || avatar}
              alt="An icon of a lady"
            />
          </div>
          <div className={styles.info}>
            <p className="border-bottom">Personal Information</p>

            <div className={styles.contactDetails}>
              <p id={styles.phone}>
                Address:{" "}
                <span className="text-muted">
                  {agentData?.address1 || agentData?.city}, {agentData?.state}
                </span>
              </p>
            </div>
            <div className={styles.contactDetails}>
              <p id={styles.phone}>
                Phone number:{" "}
                <span className="text-muted">{agentData?.phone}</span>
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
                Send a review and ratings to {agentData?.first_name} {agentData?.last_name}
              </p>
              {/* <p>
                <span className="text-primary fw-bold">"Claim Listing"</span> to
                get started.
              </p> */}
              <form onSubmit={handleSubmit}>
                <div className={styles.form}>
                  <div className="row mt-3">
                       <ReactStars {...starValue} />
                    <div className="col-md-6">
                      <label required className="form-control-label  ">
                        First Name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        value={data.first_name}
                        onChange={handleChange}
                        disabled={loading ? true : false}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-control-label ">
                        Last Name<span className="text-danger">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        name="last_name"
                        value={data.last_name}
                        onChange={handleChange}
                        disabled={loading ? true : false}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label required className="form-control-label  ">
                        State<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="state"
                        value={data.state}
                        onChange={handleChange}
                        disabled={loading ? true : false}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-control-label ">
                        City<span className="text-danger">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        name="city"
                        value={data.city}
                        onChange={handleChange}
                        disabled={loading ? true : false}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label required className="form-control-label  ">
                        Email<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        disabled={loading ? true : false}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <button
                    disabled={!data.company_name}
                    className={`btn ${styles.btn3}`}
                    type="submit"
                  >
                    Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const path = context.params.id.name;
  if (!session) {
    return {
      redirect: {
        destination: `/auth/login`,
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};
export default Review;
