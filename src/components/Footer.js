import React from 'react';
import styles from './footer.module.css'
import logo2 from '../images/logo_2.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={logo2} alt='Logo Kasa' className={styles.logo}></img>
            <p className={styles.text}>© 2020 Kasa. All right reserved</p>
        </footer>
    );
};

export default Footer;