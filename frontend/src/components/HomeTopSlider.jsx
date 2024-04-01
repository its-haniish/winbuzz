import React from 'react'
import '../styles/homeTopSlider.scss'
const HomeTopSlider = () => {
    const elemList = [
        {
            name: 'In Play',
            icon: 'fa-regular fa-circle-play'
        },
        {
            name: "Football",
            icon: "fa-solid fa-futbol"
        },
        {
            name: "Cricket",
            icon: "fa-solid fa-baseball"
        },
        {
            name: "Tennis",
            icon: "fa-solid fa-table-tennis-paddle-ball"
        },
        {
            name: "Basketball",
            icon: "fa-solid fa-basketball"
        }]

    return (
        <div className='top-slider-main'>
            {
                elemList.map(elem => {
                    return (
                        <HomeSliderElem name={elem.name} icon={elem.icon} />
                    )
                })
            }
        </div>
    )
}

export default HomeTopSlider


const HomeSliderElem = ({ icon, name }) => {
    return (
        <div className='slide-item'>
            <i className={icon}></i>
            <p>{name}</p>
        </div>
    )
}