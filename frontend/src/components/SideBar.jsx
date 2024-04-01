import React from 'react'
import "../styles/sideBar.scss"
import { FaXmark } from "react-icons/fa6";


const SideBar = ({ setShowSideBar }) => {
    return (
        <div className='sidebar-main'>
            <div className='sidebar-box'>
                <p className='sidebar-close-btn' onClick={() => {
                    setShowSideBar(false)
                }}>
                    <FaXmark size="1.2rem" ></FaXmark>
                </p>
                <img src="/forget-logo.png" alt="winbuzz-logo" />
                <SideIconList setShowSideBar={setShowSideBar} />
                <SideLinkList />


            </div>
        </div>
    )
}

export default SideBar


const SideIconList = ({ setShowSideBar }) => {
    const listArray = ['Cricket', 'Football', 'Tennis', 'Horse Racing', 'Greyhound Racing', 'Kabbadi', 'Politics', 'Casino', 'Sports', 'Binary']
    return (
        <ul className='side-icon-list'>
            {
                listArray.map(item => {
                    return (
                        <li key={item} className='side-icon-list-item'
                            onClick={() => setShowSideBar(false)}
                        >
                            <div className="img-box">
                                <img src={`/${item}.svg`} alt={item} />
                            </div>
                            <span>{item}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}


const SideLinkList = () => {
    const linkArray = ['Whatsapp Now', 'Follow on Telegram', 'Follow on Instagram']
    return (
        <ul className='side-link-list'>
            <h2>Get Instant ID on Whatsapp</h2>

            {
                linkArray.map(item => {
                    return (
                        <li key={item} className='side-link-list-item'>
                            <img src={`/${item}.png`} alt={item} />

                            {item === 'Whatsapp Now' && <a href='https://api.whatsapp.com/send?phone=918282824701' target='_blank'>{item}</a>}
                            {item === 'Follow on Telegram' && <a href='https://telegram.me/+9TJCnSbbXDozMDJk' target='_blank'>{item}</a>}
                            {item === 'Follow on Instagram' && <a href='https://www.instagram.com/winbuzzofficial/?igshid=MzRlODBiNWFlZA%3D%3D' target='_blank'>{item}</a>}

                        </li>
                    )
                })
            }
        </ul>
    )
}