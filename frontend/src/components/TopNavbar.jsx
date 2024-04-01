import React from 'react'
import '../styles/topNavbar.scss'

const TopNavbar = ({ setShowLogin, setShowSideBar }) => {
    return (
        <>
            <div className='main-topnav main-topnav-pc'>
                <div className='btn-logo-box'>
                    <i className="fa-solid fa-bars"
                        onClick={() => {
                            setShowSideBar(true)
                        }}
                    ></i>
                    <img src="/winbuzz-logo.jpg" alt="winbuzz-logo" className='winbuzz-logo' />
                </div>
                <div className='log-reg-box'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <button className='login' onClick={() => setShowLogin(showLogin => !showLogin)}>LOGIN</button>
                    <button className='register' onClick={() => {
                        window.location = "https://winbuzz.in/signup"
                    }}>REGISTER</button>
                </div>

            </div>
        </>
    )
}

export default TopNavbar