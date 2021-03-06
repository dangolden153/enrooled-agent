import React from 'react'
import { ChevronRight } from 'react-bootstrap-icons'
import image from '../public/images/most-requested.png'
import CitySelect from './CitySelect'

const MostRequestedMobile = () => {
    return (
        <div className='mr-cities d-flex flex-column align-items-center justify-content-center'>
            <div className="mr-header d-flex flex-row w-100 justify-content-center">
                <h1>Most Requested Cities</h1>
            </div>
            <div className="mr-cities-outer d-flex flex-row w-100" style={{ 
                backgroundImage: `url(${image.src})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover' 
            }}>
                <div className="mr-cities-inner d-flex flex-row justify-content-between w-100">
                    <CitySelect />
                </div>
            </div>
            <div className="mr-footer d-flex flex-row w-100 justify-content-center">
                <button className='btn btn-outline'>Find More Local EA's <ChevronRight /></button>
            </div>
        </div>
    )
}

export default MostRequestedMobile
