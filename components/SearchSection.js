import { ChevronRight } from 'react-bootstrap-icons'
import Image from 'next/image'
import _default from '../public/images/search-section.png'

const SearchSection = () => {
    return (
        <div className='section search-section d-flex flex-column align-items-center justify-content-center'>
            <div className="d-flex flex-column flex-lg-row justify-content-between justify-content-md-center">
                <div className="col-lg-6 d-flex justify-content-center justify-content-lg-start">
                    <Image src={_default} />
                </div>
                <div className="col-lg-6 text-center text-lg-start justify-content-center justify-content-lg-start">
                    <h1 className='section-heading'>The simplest way to
                        search and access your
                        next Tax Expert on the
                        go anytime, anywhere.
                    </h1>
                    <p className='section-body'> Search our online directory of licensed and Verified Enrolled Agents. See details of the Enrolled Agents and find the one that best suits your needs. Read reviews from clients served to in your community. All Enrolled Agents listed have been appraised to ensure accurate profile and licensure.</p>
                    <button type="button" className='btn-common search-btn'>Search for your enrolled agent <ChevronRight /></button>
                </div>
            </div>
        </div>
    )
}

export default SearchSection
