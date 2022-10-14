import React from 'react';
import Redstar from '../images/red_star.png'
import Whitestar from '../images/white_star.png'

const Rating = (rate) => {

    return (
        <div className='rating'>
            {rate.data > 0 ? <img src={Redstar} alt='redstar' /> : <img src={Whitestar} alt='whitestar' />}
            {rate.data > 1 ? <img src={Redstar} alt='redstar' /> : <img src={Whitestar} alt='whitestar' />}
            {rate.data > 2 ? <img src={Redstar} alt='redstar' /> : <img src={Whitestar} alt='whitestar' />}
            {rate.data > 3 ? <img src={Redstar} alt='redstar' /> : <img src={Whitestar} alt='whitestar' />}
            {rate.data > 4 ? <img src={Redstar} alt='redstar' /> : <img src={Whitestar} alt='whitestar' />}
        </div>
    );
};

export default Rating;