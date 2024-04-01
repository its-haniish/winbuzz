import React from 'react'
import '../styles/forgetScreen.scss'
import { FaXmark } from "react-icons/fa6";

const ForgetScreen = ({ setShowForget, setShowLogin }) => {

    return (
        <div className='forget-main'>
            <div className='forget-box'>
                <p className='forget-close-btn' onClick={() => {
                    setShowForget(false)
                }}>
                    <FaXmark size="1.2rem"></FaXmark>
                </p>
                <img className='forget-head-img' src="/forget-logo.png" alt="winbuzz-logo" />
                <form className='forget-form'
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert('Account not found.')
                    }}
                >
                    <div className='forget-inp-box'>
                        <div className='flag-box'>
                            <img src="/flag.png" alt="flag" />
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <input type="number" placeholder='Mobile no' required />

                    </div>
                    <input type="submit" value='GET OTP' className='forget-otp-btn' />
                </form>
            </div>

        </div>
    )
}

export default ForgetScreen