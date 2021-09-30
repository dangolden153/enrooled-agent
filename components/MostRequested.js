import React from 'react'
import { isMobile } from 'react-device-detect'
import MostRequestedMobile from './MostRequestedMobile'
import MostRequestedWeb from './MostRequestedWeb'

const MostRequested = () => {
    return (
        <>
            { isMobile ? <MostRequestedMobile /> : <MostRequestedWeb /> }
        </>
    )
}

export default MostRequested
