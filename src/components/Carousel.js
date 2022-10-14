import React from 'react';
import ArrowBack from '../images/arrow_back.png'
import ArrowForward from '../images/arrow_forward.png'

const Carousel = (pictures) => {
    console.log(pictures);
    return (
        <div className='carrousel'>
            <button id='backButton'><img src={ArrowBack} alt='' /></button>
            {pictures.data.map(pictureUrl => (
                <img src={pictureUrl} alt='' key={pictureUrl} />
            ))}
            <button id='forwardButton'><img src={ArrowForward} alt='' /></button>
        </div>
    );
};

export default Carousel;