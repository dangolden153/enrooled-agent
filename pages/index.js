// import Image from 'next/image'
import banner1 from "../public/images/banner1.png";
import woman from "../public/images/card-woman.png";
import man from "../public/images/card-man.png";
import styles from "../styles/LandingPage.module.scss";
import Banner from "../components/Banner";
import TopRated from '../components/TopRated';
import Card from '../components/Card';
import CardList from '../components/CardList';
import VideoCard from '../components/VideoCard';
import { ChevronDown } from 'react-bootstrap-icons';
import SearchSection from '../components/SearchSection';

export default function LandingPage() {
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
        className={`${styles.stats} d-flex flex-row text-center align-items-center justify-content-center`}
      >
        <div className="col-4">
          <h1>60,000+</h1>
          <h6>Enrolled Agents listed and reviewed</h6>
        </div>
        <div className="col-4">
          <h1>Convenient</h1>
          <h6>Find an Enrolled Agent from the comfort of your home</h6>
        </div>
        <div className="col-4">
          <h1>Verified</h1>
          <h6>All Enrolled Agents listed are verified</h6>
        </div>
      </div>

      <TopRated />

      <div className={`${styles.taxResources} d-flex flex-column align-items-center justify-content-center`}>
        <h1>Tax Resources</h1>
        {/* <video src=""></video> */}
        <div className="d-flex flex-row w-100 justify-content-center">
          <VideoCard big='true' />
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
        <button type="button" className='btn-common'>Load more videos <ChevronDown /></button>
      </div>

      <SearchSection />
    </div>
  );
}
