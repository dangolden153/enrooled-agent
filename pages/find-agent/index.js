import banner1 from '../../public/images/banners/landing-page.png'
import Banner from "../../components/Banner";
import TopRated from '../../components/TopRated';
import SearchSection from '../../components/SearchSection';
import MostRequested from '../../components/MostRequested';

const index = () => {
    return (
        <>
            <Banner search background={banner1}>
                <h1 className="banner-title">Find Your Next IRS Enrolled Agent</h1>
                <h6 className="banner-extra">
                    Browse through our directory of over 60,000 professionals and engage
                    them for free
                </h6>
            </Banner>

            <SearchSection />

            <MostRequested />

            <TopRated />
        </>
    )
}

export default index
