import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import styles from './app-header.module.scss'
import { Logo, BurgerIcon, ProfileIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch} from 'react-redux'
import { SET_AUTHORISED, SET_NO_AUTHORISED } from '../../services/actions/auth'
import { useLocation } from 'react-router-dom'

const AppHeader = () => {

    const dispatch = useDispatch()
    const location = useLocation()

    useEffect( () => {
        if (localStorage.getItem('refreshToken')) {
            dispatch({
                type: SET_AUTHORISED,
                payload: {
                    isAuthorised: true
                }
            })
        } else {
            dispatch({
                type: SET_NO_AUTHORISED,
                payload: {
                    isAuthorised: false
                }
            })
        }
    }, [dispatch])

    return (
        <header className={`${styles.header} p-4`} >
        <nav className={`${styles.nav} container`} >

        <NavLink to={'/'} className={`${styles.navItem} p-5 text text_type_main-default`} activeClassName={location.pathname !== "/" ? null : styles.active}>  <BurgerIcon type={location.pathname !== "/" ? "secondary" : "primary"} /> <span className="pl-2">Конструктор</span></NavLink>
        <NavLink to={'/list'} className={`${styles.navItem} p-5 ml-2 text text_type_main-default`} activeClassName={styles.active} >  <ListIcon type={location.pathname.indexOf('/list') !== -1 ? "primary" : "secondary"} /> <span className="pl-2">Лента заказов</span></NavLink>

        <div className={styles.logo}>
            <Logo />
        </div>

        <NavLink to={'/profile'} className={`${styles.navItem} p-5 text text_type_main-default`} activeClassName={styles.active} >  <ProfileIcon type={location.pathname.indexOf('/profile') !== -1 ? "primary" : "secondary"} /> <span className="pl-2">Личный кабинет</span></NavLink>

        </nav>
        </header>
    )
}

export default AppHeader;
