import { ChevronRight } from 'react-bootstrap-icons'
import Image from 'next/image'
import _default from '../public/images/search-section.png'

const SearchSection = () => {
    return (
        <div className='search-section d-flex flex-column align-items-center justify-content-center'>
            <div className="d-flex flex-row justify-content-between">
                <div className="col-5">
                    <Image src={_default} />
                </div>
                <div className="col-6">
                    <h1 className='search-heading'>The simplest way to
                        search and access your
                        next Tax Expert on the
                        go anytime, anywhere.
                    </h1>
                    <p className='search-body'> Search our online directory of licensed and Verified Enrolled Agents. See details of the Enrolled Agents and find the one that best suits your needs. Read reviews from clients served to in your community. All Enrolled Agents listed have been appraised to ensure accurate profile and licensure.</p>
                    <button type="button" className='btn-common'>Load more videos <ChevronRight /></button>
                </div>
            </div>
        </div>
    )
}

export default SearchSection
