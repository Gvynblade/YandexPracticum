import React from 'react';
import styles from './header.module.scss'
import { Logo, BurgerIcon, ProfileIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = () => {
    return (
        <header className={`${styles.header} p-4`} >
        <nav className={`${styles.nav} container`} >

        <a href={'/'} className={`${styles.navItem} ${styles.active} p-5 text text_type_main-default`} >  <BurgerIcon type="primary" /> <span className="pl-2">Конструктор</span></a>
        <a href={'/'} className={`${styles.navItem} p-5 ml-2 text text_type_main-default`} >  <ListIcon type="secondary" /> <span className="pl-2">Лента заказов</span></a>

        <div className={styles.logo}>
        <Logo />
        </div>

        <a href={'/'} className={`${styles.navItem} p-5 text text_type_main-default`} >  <ProfileIcon type="secondary" /> <span className="pl-2">Личный кабинет</span></a>

        </nav>
        </header>
    )
}

export default AppHeader;
