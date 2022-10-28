import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { pageService } from '../_services/Page.service'
import styles from './header.module.css'
import logo1 from '../images/logo_1.png'

const Header = () => {

    let location = useLocation()
    const [linkHome, setLinkHome] = useState(styles.link)
    const [linkAPropos, setLinkAPropos] = useState(styles.link)

    useEffect(() => {
        pageService.isHome() ? setLinkHome(styles.linkActive) : setLinkHome(styles.link)
        pageService.isAPropos() ? setLinkAPropos(styles.linkActive) : setLinkAPropos(styles.link)
    }, [location])

    return (
        <header className={styles.header}>
            <img src={logo1} alt='Logo Kasa' className={styles.logo} />
            <nav className={styles.nav}>
                <Link to='/home' className={linkHome} >Accueil</Link>
                <Link to='/a-propos' className={linkAPropos} >A Propos</Link>
            </nav>
        </header>
    );
};

export default Header;