import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from './profile.module.scss'
import { useDispatch } from '../../services/hooks';
import { userLogout } from '../../services/actions/auth'
import { ProfileEditData, ProfileOrdersHistory } from '../profile-tabs'
import { Route, useLocation } from 'react-router-dom'

const ProfilePage: React.FC = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(userLogout())
    }

    const location = useLocation()

    return (
        <main className={`${styles.profile} container pl-5 pr-5`} >
            <section className={styles.profile__nav}>
                <NavLink to={'/profile'} className={styles.navLink} activeClassName={location.pathname !== "/profile" ? undefined : styles.active}>
                    <p className="text text_type_main-medium">
                        Профиль
                    </p>
                </NavLink>
                <NavLink to={'/profile/orders'} className={styles.navLink} activeClassName={styles.active}>
                    <p className="text text_type_main-medium">
                        История заказов
                    </p>
                </NavLink>
                <NavLink to={'/login'} className={styles.navLink} activeClassName="active" onClick={handleLogout}>
                    <p className="text text_type_main-medium">
                        Выход
                    </p>
                </NavLink>

                <Route exact path={'/profile'}>
                    <p className={`${styles.gray} text text_type_main-default mt-20`}>
                        В этом разделе вы можете изменить свои персональные данные
                    </p>
                </Route>

                <Route exact path={'/profile/orders'}>
                    <p className={`${styles.gray} text text_type_main-default mt-20`}>
                        В этом разделе вы можете просмотреть свою историю заказов
                    </p>
                </Route>

            </section>

            <section className={`${styles.profile__body} ml-15`}>

                <Route exact path={'/profile'}>
                    <ProfileEditData />
                </Route>

                <Route exact path={'/profile/orders'}>
                    <ProfileOrdersHistory />
                </Route>

            </section>
    </main>
)
}

export default ProfilePage;
