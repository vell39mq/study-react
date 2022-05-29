import React, { useState } from 'react'
import woman1 from './images/woman1.png'
import woman2 from './images/woman2.png'
const Show = () => {
    const [image, setImage] = useState(woman1)
    const imageChange = () => {
        setImage(image === woman1 ? woman2 : woman1)
    }

    return (
        <div>
            <button onClick={imageChange}>change image</button>
            <div>
                <img src={image} alt='' />
            </div>
        </div>
    )
}

export default Show