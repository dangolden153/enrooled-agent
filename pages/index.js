// import Image from 'next/image'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { subscribeToMailingList } from "../src/services/common";
import { getTopAgents } from "../src/redux/actions/agent";
import banner1 from "../public/images/banners/landing-page.png";
import start1 from "../public/images/start-section1.png";
import styles from "../styles/LandingPage.module.scss";
import Banner from "../components/Banner";
import TopRated from "../components/TopRated";
import SearchSection from "../components/SearchSection";
import StartSection from "../components/StartSection";
import MostRequested from "../components/MostRequested";
import RequestCallback from "../components/RequestCallback";
import TaxVideo from "../widgets/TaxVideo";
import Head from "next/head";
import Image from "next/image";
import people from "../public/images/people.png"
import convenient from "../public/images/convenient.png"
import verified from "../public/images/verified.png"
export default function LandingPage() {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
  });
  useEffect(() => {
    dispatch(getTopAgents());
  }, []);

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
        `${error.response.msg
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
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
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
      <div className={`col-12 justify-content-between ${styles.landingPage}`}>
        <Banner search background={banner1}>
          <h1 className="banner-title">Enrolled Agents are America’s Tax experts</h1>
          <h6 className="banner-extra">
            Find your next IRS Enrolled Agent today
          </h6>
        </Banner>

        <div
          className={`${styles.stats} d-flex flex-column flex-lg-row text-center align-items-center justify-content-between justify-content-lg-center`}
        >
          <div className="col-lg-4 mt-3 mb-3">
            <Image src={people} />
            <h1>60,000+</h1>
            <h6>Enrolled Agents working hard to get the biggest refund for you!</h6>
          </div>
          <div className="col-lg-4 mt-3 mb-3">
            <Image src={convenient} />
            <h1>Convenient</h1>
            <h6>Tax Pros for every schedule from the comfort of your home</h6>
          </div>
          <div className="col-lg-4 mt-3 mb-3">
            <Image src={verified} />
            <h1>Verified</h1>
            <h6>100% certainty starts here <br /> All Enrolled Agents listed are verified</h6>
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
              onSubmit={handleMailListSubmit}
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
              <button type="submit" disabled={!data.email} className="btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
