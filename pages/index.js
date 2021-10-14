// import Image from 'next/image'
import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { subscribeToMailingList } from "../src/services/common";
import banner1 from "../public/images/banners/landing-page.png";
import start1 from "../public/images/start-section1.png";
import styles from "../styles/LandingPage.module.scss";
import Banner from "../components/Banner";
import TopRated from "../components/TopRated";
import VideoCard from "../components/VideoCard";
import { ChevronDown } from "react-bootstrap-icons";
import SearchSection from "../components/SearchSection";
import StartSection from "../components/StartSection";
import MostRequested from "../components/MostRequested";
import RequestCallback from "../components/RequestCallback";
import TaxVideo from "../widgets/TaxVideo";
export default function LandingPage() {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleMailListSubmit = async (e) => {
    e.preventDefault();
    const { email } = data;
    try {
      setLoading(true);
      let response = await subscribeToMailingList(data);
      if (response) {
        if (response.data) {
          addToast("You have subscribed to our mailing list successfully", {
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
    <div className={`col-12 justify-content-between ${styles.landingPage}`}>
      <Banner search background={banner1}>
        <h1 className="banner-title">Find Your Next IRS Enrolled Agent</h1>
        <h6 className="banner-extra">
          Browse through our directory of over 60,000 professionals and engage
          them for free
        </h6>
      </Banner>

      <div
        className={`${styles.stats} d-flex flex-column flex-lg-row text-center align-items-center justify-content-between justify-content-lg-center`}
      >
        <div className="col-lg-4">
          <h1>60,000+</h1>
          <h6>Enrolled Agents listed and reviewed</h6>
        </div>
        <div className="col-lg-4">
          <h1>Convenient</h1>
          <h6>Find an Enrolled Agent from the comfort of your home</h6>
        </div>
        <div className="col-lg-4">
          <h1>Verified</h1>
          <h6>All Enrolled Agents listed are verified</h6>
        </div>
      </div>

      <TopRated />

      <div
        className={`${styles.taxResources} d-flex flex-column align-items-center justify-content-center`}
      >
        <h1>Tax Resources</h1>
        {/* <video src=""></video> */}
        <TaxVideo />
        {/* <div className="d-flex flex-row w-100 justify-content-center">
          <VideoCard big="true" />
        </div>
        <div className="d-flex flex-row w-100 justify-content-between">
          <div className="col-3">
            <VideoCard />
          </div>
          <div className="col-3">
            <VideoCard />
          </div>
          <div className="col-3">
            <VideoCard />
          </div>
          <div className="col-3">
            <VideoCard />
          </div>
        </div>
        <button type="button" className="btn-common">
          Load more videos <ChevronDown />
        </button> */}
      </div>

      <SearchSection />

      <StartSection image={start1} />

      <MostRequested />

      <RequestCallback />

      <div
        className={`${styles.mailingList} d-flex flex-column align-items-center justify-content-center`}
      >
        <h1>Get the latest update</h1>
        <h6>Subscribe to our mailing list.</h6>
        <div className="d-flex flex-row justify-content-center">
          <form
            className={`${styles.subscriberForm} d-flex flex-row w-100 justify-content-between`}
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
              disabled={loading ? true : false}
              required
            />
            <button type="submit" className="btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
