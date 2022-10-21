import React from 'react';
import styles from './host.module.css'

const Host = (host) => {
    return (
        <div className={styles.host}>
            <p className={styles.text}>{host.data.name.split(' ')[0]}<br />{host.data.name.split(' ')[1]}</p>
            <img src={host.data.picture} alt="host's face" className={styles.image} />
        </div>
    );
};

export default Host;