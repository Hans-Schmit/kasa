import React, { useState } from 'react';
import styles from './carousel.module.css'
import ArrowBack from '../images/arrow_back.png'
import ArrowForward from '../images/arrow_forward.png'


const Carousel = (pictures) => {

    const [imgNum, setImgNum] = useState(0)

    const changeImg = (direction) => {
        if (direction === 1) {
            imgNum === pictures.data.length - 1 ? setImgNum(0) : setImgNum(imgNum + 1)
        }
        if (direction === -1) {
            imgNum === 0 ? setImgNum(pictures.data.length - 1) : setImgNum(imgNum - 1)
        }
    }

    return (
        <div className={styles.carousel}>

            <img src={pictures.data[imgNum]} alt={`Vue n° ${imgNum + 1}`} className={styles.image} />

            {(pictures.data.length > 1) &&
                <>
                    <button onClick={() => changeImg(-1)} className={styles.buttonLeft}><img src={ArrowBack} alt='flèche gauche' className={styles.arrow} /></button>
                    <span className={styles.count}>{imgNum + 1}/{pictures.data.length}</span>
                    <button onClick={() => changeImg(1)} className={styles.buttonRight}><img src={ArrowForward} alt='flèche droite' className={styles.arrow} /></button>
                </>
            }
        </div>
    );
};

export default Carousel;