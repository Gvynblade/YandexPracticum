import React from 'react';
import Styles from './preloader.module.scss'
import preloaderIcon from '../../images/spinner.gif'

const Preloader = () => {
    return (
        <section className={`${Styles.preloader} container`}>
            <img src={preloaderIcon} alt={'Data fetching in progress'} />

            <p className={`${Styles.preloader_description} text text_type_main-large`}>
                The app is loading, please wait...
            </p>

        </section>
    )
}

export default Preloader;
