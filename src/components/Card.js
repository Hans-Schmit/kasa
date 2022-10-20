import React from 'react';
import { Link } from 'react-router-dom'
import styles from './card.module.css'


const Card = ({ logement }) => {

    return (
        <div className={styles.card}>
            <Link to={`/fiche-logement?id=${logement.id}`}>
                <img src={logement.cover} alt={logement.title} className={styles.image}></img>
                <p className={styles.title}>{logement.title}</p>
            </Link>
        </div >
    );
};

export default Card;