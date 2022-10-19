import React from 'react';
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <p><Link to='/home'>Retourner sur la page d’accueil</Link></p>
        </>
    );
};

export default Error;