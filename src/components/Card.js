import React from 'react';
import { Link } from 'react-router-dom'


const Card = ({ logement }) => {

    return (
        <div className='card'>
            <Link to={`./fiche-logement/${logement.id}`}>
                <img src={logement.cover} alt={logement.title}></img>
                <p>{logement.title}</p>
            </Link>
        </div >
    );
};

export default Card;