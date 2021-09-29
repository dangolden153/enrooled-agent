import React from 'react'
import Card from './Card'
import Image from 'next/image'
import _default from '../public/images/tax1.webp'

const VideoCard = ({ big='false' }) => {

    return (
        <Card className='card-video'>
            <Image src={_default} height={big === 'true' ? 600 : 700} />
        </Card>
    )
}

export default VideoCard
