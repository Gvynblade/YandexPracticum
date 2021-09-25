import React from 'react';
import styles from './not-found.module.scss'
import icon from '../../images/warning-exclamation-mark-light-blue.svg'

const NotFoundPage = () => {
    return (
        <main className={`${styles.page} container`}>
            <img src={icon} alt="page not found" />
            <p className="text text_type_main-medium">
                Данная страница не найдена
            </p>
        </main>
    )
}

export default NotFoundPage;
