import React, { useState } from 'react'

const Timer = () => {
    const [date, setDate] = useState([]);

    const getNow = () => {
        const today = new Date().getDate();;
        setDate(today);
        console.log(today);
    }


    return (
        <div>
            <p>今日は何日？</p>
            <button onClick={getNow}>push</button>
            <p>{date}日です</p>
        </div>
    )
}

export default Timer