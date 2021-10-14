import React, { useState } from 'react'
import { ArrowLeft, PeopleFill, QuestionCircle, Clipboard, ChatDots, Gear, DoorOpen, ArrowRight } from 'react-bootstrap-icons'
import Image from 'next/image'
import profileImage from "../../../public/images/card-woman.png";

const Sidebar = () => {

    const [toggled, setToggled] = useState(false)

    const items = [
        {
            icon: <PeopleFill />,
            text: 'My Listing'
        },
        {
            icon: <QuestionCircle />,
            text: 'Ask an EA'
        },
        {
            icon: <Clipboard />,
            text: 'Articles'
        },
        {
            icon: <ChatDots />,
            text: 'Messages'
        },
        {
            icon: <Gear />,
            text: 'Account Details'
        },
        {
            icon: <DoorOpen />,
            text: 'Logout'
        }
    ]

    return (
        <div className={toggled ? 'col-1' : 'col-2'}>
            <div className={`sidebar ${toggled ? 'sidebar-toggled' : ''} d-flex flex-column align-items-center justify-content-center`}>
                <Image className='rounded-circle' src={profileImage} />
                <ul>
                    {
                        items.map((item, index) => (
                            <li key={index}>{item.icon} <span className={toggled ? 'd-none' : 'd-inline'}>{item.text}</span></li>
                        ))
                    }
                </ul>
                <a className='sidebar-toggler' onClick={() => setToggled(!toggled)}> {toggled ? <ArrowRight /> : <ArrowLeft />} </a>
            </div>
        </div>
    )
}

export default Sidebar
