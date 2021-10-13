import React, { useState } from 'react'
import { ArrowLeft, PeopleFill, QuestionCircle, Clipboard, ChatDots, Gear, DoorOpen, ArrowRight } from 'react-bootstrap-icons'

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
        <div className={`sidebar ${toggled ? 'sidebar-toggled' : ''} d-flex flex-column align-items-center justify-content-center`}>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index}>{item.icon} <span className={toggled ? 'd-none' : 'd-inline'}>{item.text}</span></li>
                    ))
                }
            </ul>
            <a className='sidebar-toggler' onClick={() => setToggled(!toggled)}> {toggled ? <ArrowRight /> : <ArrowLeft /> } </a>
        </div>
    )
}

export default Sidebar
