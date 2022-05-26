import React, { useState } from 'react'

const Timer = () => {
    const [date, setDate] = useState([]);

    const getNow = () => {
        const today = new Date().toLocaleString();
        setDate(today);
        console.log(today);
    }


    return (
        <div>
            <p>今の時刻は</p>
            <button onClick={getNow}>push</button>
            <p>{date}</p>
        </div>
    )
}

export default Timer