// import Image from 'next/image'
// import banner1 from '../public/images/banner1.png'
import styles from '../styles/LandingPage.module.scss'
import Banner from "../components/Banner";

export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <Banner search background="/images/banner1.png">
        <h1 className='banner-title'>Find Your Next IRS Enrolled Agent</h1>
        <h6 className='banner-extra'>Browse through our directory of over 60,000 professionals and engage them for free</h6>
      </Banner>

    </div>
  )
}
