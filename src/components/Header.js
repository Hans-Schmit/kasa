import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <img src='' alt=''></img>
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