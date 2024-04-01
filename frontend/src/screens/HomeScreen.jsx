import React from 'react'
import '../styles/homeStyles.scss'
import TopNavbar from '../components/TopNavbar'
import HomeTopSlider from '../components/HomeTopSlider'
import HomeScoreBoard from '../components/HomeScoreBoard'

const HomeScreen = ({ setShowLogin, setShowSideBar }) => {
    return (
        <>
            <TopNavbar setShowLogin={setShowLogin} setShowSideBar={setShowSideBar} />
            <HomeTopSlider />
            <HomePoster />
            <HomeScoreBoard />
        </>
    )
}

export default HomeScreen



const HomePoster = () => {
    const posterNames = ['poster-1', 'poster-2', 'poster-3', 'poster-4', 'poster-5', 'poster-6'];

    return (
        <div className='home-poster-box' >
            {
                posterNames.map((elem) => {
                    return (
                        <img alt={elem} key={elem} src={`${elem}.webp`} className='home-poster' />
                    )
                })
            }

        </div>
    )
}
