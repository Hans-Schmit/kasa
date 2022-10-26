import React, { useEffect, useRef, useState } from 'react';
import styles from './banner.module.css'
import bannerHome from '../images/banner_1.png'
import bannerAPropos from '../images/banner_2.png'
import { pageService } from '../_services/Page.service.js'


const Banner = () => {

    const [content, setContent] = useState([])

    const flagBanner = useRef(false)

    useEffect(() => {
        if (flagBanner.current === false) {
            if (pageService.isAPropos()) {
                setContent(
                    <div className={styles.bannerAPropos}>
                        <img src={bannerAPropos} alt='Mountains and trees landscape' className={styles.image} />
                    </div>
                )
            }
            else {
                setContent(
                    <div className={styles.banner}>
                        <img src={bannerHome} alt='Coast and trees landscape' className={styles.image} />
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