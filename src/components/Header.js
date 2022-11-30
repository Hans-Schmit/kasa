import React from 'react';
import { NavLink, } from 'react-router-dom'
import styles from './header.module.css'
import logo1 from '../images/logo_1.png'

const Header = () => {

    return (
        <header className={styles.header}>
            <img src={logo1} alt='Logo Kasa' className={styles.logo} />
            <nav className={styles.nav}>
                <NavLink to='/' className={({ isActive }) => isActive ? styles.linkActive : styles.link} end>
                    Accueil
                </NavLink>
                <NavLink to='/a-propos' className={({ isActive }) => isActive ? styles.linkActive : styles.link}>
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;