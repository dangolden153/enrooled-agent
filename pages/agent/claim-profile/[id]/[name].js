import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import Smilie from "../../../../public/images/PP.png";
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
import styles from "../../../../styles/agents/ClaimProfile.module.scss";
import { getSingleAgent } from "../../../../src/redux/actions/agent";
import avatar from "../../../../public/images/avatar.png";
import { useToasts } from "react-toast-notifications";
import { claimAgentAccount } from "../../../../src/services/agent";
library.add(fab, faLinkedin);
library.add(fab, faFacebook);
library.add(fab, faTwitter);
library.add(fab, faInstagram);
import { getSession } from "next-auth/client";
const ClaimProfile = ({ session }) => {
  const { user } = session;
  const router = useRouter();
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const agentData = useSelector((state) => state.getAgents.singleAgent);

  const [data, setData] = useState({
    job_role: "",
    company_size: "",
    company_name: "",
    company_revenue: "",
    organization_type: "",
    annual_tax: "",
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
      job_role: data.job_role,
      company_size: data.company_size,
      company_name: data.company_name,
      company_revenue: data.company_revenue,
      organization_type: data.organization_type,
      annual_tax: data.annual_tax,
      agent_id: agentData.id,
    };
    console.log("agent id", formData);
    try {
      setLoading(true);
      let response = await claimAgentAccount(formData);
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
        }
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
              <form onSubmit={handleSubmit}>
                <div className={styles.form}>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label required className="form-control-label  ">
                        Job Role<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="job_role"
                        value={data.job_role}
                        onChange={handleChange}
                        disabled={loading ? true : false}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-control-label ">
                        Company Name<span className="text-danger">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        name="company_name"
                        value={data.company_name}
                        onChange={handleChange}
                        disabled={loading ? true : false}
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
                        name="company_size"
                        value={data.company_size}
                        onChange={handleChange}
                        disabled={loading ? true : false}
                        required
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
                        name="organization_type"
                        value={data.organization_type}
                        onChange={handleChange}
                        disabled={loading ? true : false}
                        required
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
                        name="company_revenue"
                        value={data.company_revenue}
                        onChange={handleChange}
                        disabled={loading ? true : false}
                        required
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
                        name="annual_tax"
                        value={data.annual_tax}
                        onChange={handleChange}
                        disabled={loading ? true : false}
                        required
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
                  <button
                    disabled={!data.company_name}
                    className={`btn ${styles.btn3}`}
                    type="submit"
                  >
                    Claim Listing
                  </button>
                </div>
                <div className="text-center">
                  <input type="checkbox" />
                  <span className="ms-3">
                    I agree to the{" "}
                    <span className="text-primary">terms of use</span> and{" "}
                    <span className="text-primary">privacy policy</span>{" "}
                  </span>
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
export default ClaimProfile;
