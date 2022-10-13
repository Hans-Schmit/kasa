import React, { useEffect, useRef, useState } from 'react';
import banner1 from '../images/banner1.png'
import banner2 from '../images/banner2.png'
import isAPropos from '../_services/getpage.service'


const Banner = () => {

    const [banner, setBanner] = useState([])
    const [altTxt, setAltTxt] = useState([])
    const [paragraph, setParagraph] = useState([])
    const flagBanner = useRef(false)

    useEffect(() => {
        if (flagBanner.current === false) {
            if (isAPropos()) {
                setBanner(banner2)
                setAltTxt('Mountains and trees landscape')
            }
            else {
                setBanner(banner1)
                setAltTxt('Coast and trees landscape')
                setParagraph(<p>Chez vous, partout et ailleurs</p>)
            }
        }

        return () => flagBanner.current = true
    }, [])


    return (
        <div className='banner'>
            <img src={banner} alt={altTxt} />
            {paragraph}
        </div>
    );
};

export default Banner;