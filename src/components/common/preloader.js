import React from 'react';
import styles from './preloader.module.scss'
import preloaderIcon from '../../images/spinner.gif'

const Preloader = () => {
    return (
        <div className={`${styles.preloader} container`}>
            <img src={preloaderIcon} alt={'Data fetching in progress'} />

            <p className={`${styles.preloader_description} text text_type_main-medium`}>
                Fetching data, please wait...
            </p>

        </div>
    )
}

export default Preloader;
