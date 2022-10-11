import React from 'react';
import { Link } from 'react-router-dom'
import logo1 from '../images/logo1.png'

const Header = () => {
    return (
        <>
            <header>
                <img src={logo1} alt='Logo Kasa' />
                <nav>
                    <ul>
                        <li><Link to='/home'>Accueil</Link></li>
                        <li><Link to='/a-propos'>A Propos</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;