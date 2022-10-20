import React, { useEffect, useRef, useState } from 'react';
import styles from './banner.module.css'
import banner1 from '../images/banner_1.png'
import banner2 from '../images/banner_2.png'
import isAPropos from '../_services/getpage.service'


const Banner = () => {

    const [content, setContent] = useState([])

    const flagBanner = useRef(false)

    useEffect(() => {
        if (flagBanner.current === false) {
            if (isAPropos()) {
                setContent(
                    <div className={styles.bannerAPropos}>
                        <img src={banner2} alt='Mountains and trees landscape' className={styles.image} />
                    </div>
                )
            }
            else {
                setContent(
                    <div className={styles.banner}>
                        <img src={banner1} alt='Coast and trees landscape' className={styles.image} />
                        <p className={styles.text}> Chez vous, partout et ailleurs</ p >
                    </div>
                )
            }
        }

        return () => flagBanner.current = true
    }, [])

    return content
};

export default Banner;