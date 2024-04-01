import React, { useState } from 'react';
import '../styles/homeScoreBoard.scss'

const HomeScoreBoard = () => {
    const scoreItemArry = [
        {
            title: "INDIA T10 VS SOUTH AFRICA T10",
            time: "19/03/2024, 18:20",
        },
        {
            title: "PAKISTAN VS WEST INDIES T10",
            time: "20/03/2024, 19:00",
        },
        {
            title: "INDIA T10 VS SOUTH AFRICA T10",
            time: "19/03/2024, 19:10",
        },
        {
            title: "ZIMBABWE T10 VS NETHERLANDS T10",
            time: "19/03/2024, 18:20",
        },
        {
            title: "INDIA T10 VS SOUTH AFRICA T10",
            time: "19/03/2024, 18:20",
        },
        {
            title: "INDIA T10 VS SOUTH AFRICA T10",
            time: "19/03/2024, 18:20",
        },
        {
            title: "INDIA T10 VS AUSTRALIA T10",
            time: "19/03/2024, 20:20",
        }
    ]
    return (
        <>
            <div className='score-head-box'>
                <img src="/score-board-head.jpg" alt="heading score board" className='heading-img' />
                {
                    scoreItemArry.map(item => {
                        return (
                            <ScoreBoardItem title={item.title} time={item.time} />
                        )
                    })
                }
            </div>

        </>
    )
}

export default HomeScoreBoard;



const ScoreBoardItem = ({ title, time }) => {
    const [color, setColor] = useState("green")
    setTimeout(() => {
        color === "green" ? setColor("yellowgreen") : setColor("green")
    }, 1000);
    return (
        <>
            <div className='score-item-box'>
                <div className='title'>
                    <p >{title}</p>
                    <span className='green-dot' style={{ backgroundColor: color }}></span>
                </div>
                <p className='time'>{time}</p>
            </div>
        </>
    )
}