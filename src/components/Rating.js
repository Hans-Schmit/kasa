import React from 'react';
import styles from './rating.module.css'
import Redstar from '../images/red_star.png'
import Whitestar from '../images/white_star.png'

const Rating = (rate) => {

    return (
        <div className={styles.rating}>
            {rate.data > 0 ? <img src={Redstar} alt='redstar' className={styles.star} /> : <img src={Whitestar} alt='whitestar' className={styles.star} />}
            {rate.data > 1 ? <img src={Redstar} alt='redstar' className={styles.star} /> : <img src={Whitestar} alt='whitestar' className={styles.star} />}
            {rate.data > 2 ? <img src={Redstar} alt='redstar' className={styles.star} /> : <img src={Whitestar} alt='whitestar' className={styles.star} />}
            {rate.data > 3 ? <img src={Redstar} alt='redstar' className={styles.star} /> : <img src={Whitestar} alt='whitestar' className={styles.star} />}
            {rate.data > 4 ? <img src={Redstar} alt='redstar' className={styles.star} /> : <img src={Whitestar} alt='whitestar' className={styles.star} />}
        </div>
    );
};

export default Rating;