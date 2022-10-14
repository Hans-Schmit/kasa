import React, { useState } from 'react';
import Arrow from '../images/arrow.png'

const Collaps = ({ data }) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div className='collaps'>
            <div className='collaps_title' onClick={() => setIsActive(!isActive)} style={{ backgroundColor: "#EE8888", color: "#FFFFFF" }}>
                {data.title}
                {isActive ?
                    <img src={Arrow} alt='' ></img> :
                    <img src={Arrow} alt='' style={{ transform: "rotate(180deg)" }}></img>
                }
            </div>

            {isActive &&
                <div className='collaps_content' style={{ backgroundColor: "#DEDEDE", color: "#EE8888" }}>
                    {data.text}
                </div>
            }


        </div>
    );
};

export default Collaps;