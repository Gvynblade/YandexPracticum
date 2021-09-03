import React from 'react';
import styles from './preloader.module.scss'
import preloaderIcon from '../../images/spinner.gif'

const Preloader = () => {
    return (
        <section className={`${styles.preloader} container`}>
            <img src={preloaderIcon} alt={'Data fetching in progress'} />

            <p className={`${styles.preloader_description} text text_type_main-large`}>
                The app is loading, please wait...
            </p>

        </section>
    )
}

export default Preloader;
