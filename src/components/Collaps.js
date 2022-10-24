import React, { useState } from 'react';
import styles from './collaps.module.css'
import ArrowDown from '../images/arrow_down.png'
import ArrowUp from '../images/arrow_up.png'

const Collaps = ({ data }) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div className={data.style === "Logement" ? styles.collapsLogement : styles.collaps}>
            <div className={data.style === "Logement" ? styles.titleLogement : styles.title} onClick={() => setIsActive(!isActive)} >
                <h2 className={data.style === "Logement" ? styles.h2Logement : styles.h2}>{data.title}</h2>
                <img src={isActive ? ArrowUp : ArrowDown} alt={isActive ? 'Arrow up' : 'Arrow down'} className={data.style === "Logement" ? styles.arrowLogement : styles.arrow} />
            </div>

            {isActive &&
                <div className={data.style === "Logement" ? styles.contentLogement : styles.content} >
                    {(data.title === "Équipements" ?
                        <ul className={styles.ul}>
                            {data.text.map(equipment => (
                                <li key={equipment} className={styles.li}>{equipment}</li>
                            ))}
                        </ul>
                        : <p className={data.style === "Logement" ? styles.textLogement : styles.text}>{data.text}</p>)}
                </div>
            }
        </div>
    );
};

export default Collaps;