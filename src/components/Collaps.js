import React, { useState } from 'react';
import ArrowDown from '../images/arrowdown.png'
import ArrowUp from '../images/arrowup.png'

const Collaps = ({ data }) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div className='collaps'>
            <div className='collaps_title' onClick={() => setIsActive(!isActive)} style={{ backgroundColor: "#EE8888", color: "#FFFFFF" }}>
                {data.title}
                {isActive ? <img src={ArrowDown} alt='arrow down' ></img> : <img src={ArrowUp} alt='arrow up' ></img>}
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