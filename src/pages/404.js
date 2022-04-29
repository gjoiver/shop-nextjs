import React from 'react';
import styles from '@styles/NotFound.module.scss';
const NotFound = () => {
    return (
        <div className={styles['not-found']}>
            <h1>Error 404</h1>
            <p>Uppss! Algo ha salido mal, el recurso solicitado no ha sido encontrado</p>
        </div>
    );
};

export default NotFound;