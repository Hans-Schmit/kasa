import React from 'react';
import styles from './tag.module.css'

const Tag = (tag) => {
    return (
        <p className={styles.tag}>
            {tag.data}
        </p>
    );
};

export default Tag;