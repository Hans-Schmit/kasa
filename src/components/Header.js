import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { pageService } from '../_services/Page.service'
import styles from './header.module.css'
import logo1 from '../images/logo_1.png'

const Header = () => {

    const [linkHome, setLinkHome] = useState(styles.link)
    const [linkAPropos, setLinkAPropos] = useState(styles.link)

    const flagLinks = useRef(false)

    const switchActive = (link) => {
        link === 'home' ? setLinkHome(styles.linkActive) : setLinkHome(styles.link)
        link === 'apropos' ? setLinkAPropos(styles.linkActive) : setLinkAPropos(styles.link)
    }


    useEffect(() => {
        if (flagLinks.current === false) {
            if (pageService.isHome()) {
                setLinkHome(styles.linkActive)
            }
            if (pageService.isAPropos()) {
                setLinkAPropos(styles.linkActive)
            }
        }

        return () => flagLinks.current = true
    }, [])

    return (
        <header className={styles.header}>
            <img src={logo1} alt='Logo Kasa' className={styles.logo} />
            <nav className={styles.nav}>
                <Link to='/home' className={linkHome} onClick={() => switchActive("home")}>Accueil</Link>
                <Link to='/a-propos' className={linkAPropos} onClick={() => switchActive("apropos")}>A Propos</Link>
            </nav>
        </header>
    );
};

export default Header;