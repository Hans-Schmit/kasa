import React, { useState } from 'react';
import styles from './collaps.module.css'
import ArrowDown from '../images/arrow_down.png'
import ArrowUp from '../images/arrow_up.png'

const Collaps = ({ data }) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div className={styles.collaps}>
            <div className={styles.title} onClick={() => setIsActive(!isActive)} >
                <h2 className={styles.h2}>{data.title}</h2>
                {isActive ? <img src={ArrowDown} alt='arrow down' className={styles.arrow}></img> : <img src={ArrowUp} alt='arrow up' className={styles.arrow}></img>}
            </div>

            {isActive &&
                <div className={styles.content} >
                    {(data.title === "Équipements" ?
                        <ul className={styles.ul}>
                            {data.text.map(equipment => (
                                <li key={equipment} className={styles.li}>{equipment}</li>
                            ))}
                        </ul>
                        : <p className={styles.text}>{data.text}</p>)}
                </div>
            }
        </div>
    );
};

export default Collaps;