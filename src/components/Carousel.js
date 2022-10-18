import React, { useState } from 'react';
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
        <div className='carrousel'>

            <img src={pictures.data[imgNum]} alt={`Vue n° ${imgNum + 1}`} />

            {(pictures.data.length > 1) &&
                <>
                    <button id='backButton' onClick={() => changeImg(-1)}><img src={ArrowBack} alt='flèche gauche' /></button>
                    <span id="imgCounter">{imgNum + 1}/{pictures.data.length}</span>
                    <button id='forwardButton' onClick={() => changeImg(1)}><img src={ArrowForward} alt='flèche droite' /></button>
                </>
            }
        </div>
    );
};

export default Carousel;