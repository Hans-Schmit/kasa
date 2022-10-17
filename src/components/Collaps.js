import React, { useState } from 'react';
import ArrowDown from '../images/arrow_down.png'
import ArrowUp from '../images/arrow_up.png'

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
                    {(data.title === "Équipements" ?
                        <ul>
                            {data.text.map(equipment => (
                                <li key={equipment}>{equipment}</li>
                            ))}
                        </ul>
                        : <p>{data.text}</p>)}
                </div>
            }
        </div>
    );
};

export default Collaps;