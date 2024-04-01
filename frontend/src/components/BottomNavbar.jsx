import React from 'react'
import '../styles/bottomNavbar.scss'
import { MdSportsKabaddi } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdCasino } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const BottomNavbar = () => {
    return (
        <nav className='bottom-nav-main'>
            <div className='bot-nav-box-1'>
                <BottomNavItem className="bot-nav-icon" icon={<MdSportsKabaddi />} name='Sports' size="1.3rem" />
                <BottomNavItem className="bot-nav-icon" icon={<FaRegCirclePlay />} name='In Play' size="1.3rem" />
            </div>
            <div className='bot-nav-box-2'>
                <BottomNavItem className="bot-nav-icon" icon={<MdCasino />} name='Casino' size="1.3rem" />
                <BottomNavItem className="bot-nav-icon" icon={<HiOutlineSpeakerphone />} name='Promotions' size="1.3rem" />
            </div>

        </nav>
    )
}

export default BottomNavbar



const BottomNavItem = ({ icon, name }) => {
    return (
        <>
            <div className='bot-nav-item'>
                {icon}
                <p>{name}</p>
            </div>
        </>
    )
}