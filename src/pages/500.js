import React from 'react';
import styles from '@styles/NotFound.module.scss';
const InternalServerError = () => {
    return (
        <div className={styles['not-found']}>
            <h1>Error 500</h1>
            <p>Uppss! Algo ha salido mal, hubo un error en el servidor</p>
        </div>
    );
};

export default InternalServerError;