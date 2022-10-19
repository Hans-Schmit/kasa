import React from 'react';
import { Link } from 'react-router-dom'
import styles from './header.module.css'
import logo1 from '../images/logo_1.png'

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo1} alt='Logo Kasa' className={styles.logo} />
            <nav className={styles.nav}>
                <Link to='/home' className={styles.link}>Accueil</Link>
                <Link to='/a-propos' className={styles.link}>A Propos</Link>
            </nav>
        </header>
    );
};

export default Header;