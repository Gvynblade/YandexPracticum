import React from 'react';
import Styles from './appHeader.module.scss'
import { Logo, BurgerIcon, ProfileIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = () => {
    return (
        <header className={`${Styles.header} p-4`} >
        <nav className={`${Styles.nav} container`} >

        <a href={'/'} className={`${Styles.navItem} ${Styles.active} p-5 text text_type_main-default`} >  <BurgerIcon type="primary" /> <span className="pl-2">Конструктор</span></a>
        <a href={'/'} className={`${Styles.navItem} p-5 ml-2 text text_type_main-default`} >  <ListIcon type="secondary" /> <span className="pl-2">Лента заказов</span></a>

        <div className={Styles.logo}>
        <Logo />
        </div>

        <a href={'/'} className={`${Styles.navItem} p-5 text text_type_main-default`} >  <ProfileIcon type="secondary" /> <span className="pl-2">Личный кабинет</span></a>

        </nav>
        </header>
    )
}

export default AppHeader;
