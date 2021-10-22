import React, { useState } from 'react'
import { ArrowLeft, PeopleFill, QuestionCircle, Clipboard, ChatDots, Gear, DoorOpen, ArrowRight } from 'react-bootstrap-icons'
import Image from 'next/image';
import Link from 'next/link';
import profileImage from "../../../public/images/card-woman.png";
import { useSelector } from "react-redux";
const Sidebar = () => {
const user = useSelector((state) => state.auth.user);
    const [toggled, setToggled] = useState(false)

    const items = [
        {
            icon: <PeopleFill />,
            text: 'My Listing',
            href: 'dashboard'
        },
        {
            icon: <QuestionCircle />,
            text: 'Ask an EA',
            href: 'dashboard/ask-ea'
        },
        {
            icon: <Clipboard />,
            text: 'Articles',
            href: 'dashboard/articles'
        },
        {
            icon: <ChatDots />,
            text: 'Messages',
            href: 'dashboard/messages'
        },
        {
            icon: <Gear />,
            text: 'Account Details',
            href: 'dashboard/account'
        },
        {
            icon: <DoorOpen />,
            text: 'Logout',
            href: ""
        }
    ]

    return (
        <div className={toggled ? 'col-1' : 'col-2'}>
            <div className={`sidebar ${toggled ? 'sidebar-toggled' : ''} d-flex flex-column align-items-center justify-content-center`}>
                <Image className='rounded-circle' src={user?.imageUrl || profileImage} />
                <ul>
                    {
                        items.map((item, index) => (
                           <Link href={item.href}><li key={index}>{item.icon} <span className={toggled ? 'd-none' : 'd-inline'}>{item.text}</span></li></Link>
                        ))
                    }
                </ul>
                <a className='sidebar-toggler' onClick={() => setToggled(!toggled)}> {toggled ? <ArrowRight /> : <ArrowLeft />} </a>
            </div>
        </div>
    )
}

export default Sidebar
