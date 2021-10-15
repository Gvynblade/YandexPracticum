import React from 'react'
import Moment from 'react-moment';
import 'moment/locale/ru';
import 'moment-timezone';
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './profile-orders-item.module.scss'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { MODAL_OPEN } from '../../services/actions/app'
import { TOrderElement } from '../../services/types/data'

type TProps={
    data: TOrderElement
}

export const ProfileOrdersItem: React.FC<TProps> = ({data}) => {

    const dispatch = useDispatch()

    const ingredientsList: JSX.Element[] = []

    data.ingredientsImages.forEach( (element, index) => {

        if (data.ingredientsImages.length > 5) {
            if ( index < 5 ) {
                ingredientsList.push(
                    <div className={styles.ordersItem__ingredient} style={{zIndex: 10 - index}} key={index}>
                        <img src={element.image} alt={element.name} />
                    </div>
                )
            }
            if ( index === 5 ) {
                ingredientsList.push(
                    <div className={styles.ordersItem__ingredient} style={{zIndex: 10 - index}} key={index}>
                        <img src={element.image} alt={element.name} />
                        <div className={styles.ordersItem__counter}>
                            <p className="text text_type_main-default">+{data.ingredientsImages.length - 5}</p>
                        </div>
                    </div>
                )
            }
        } else {
            ingredientsList.push(
                <div className={styles.ordersItem__ingredient} style={{zIndex: 10 - index}} key={index}>
                    <img src={element.image} alt={element.name} />
                </div>
            )
        }
    })

    const handleModalOpen = () => {
        dispatch({
            type: MODAL_OPEN,
            payload: {
                isModalOpen: true,
                modalType: 'profileOrder'
            }
        })
    }

    const calendarStrings = {
        lastDay : '[Вчера, ] LT [GMT]Z',
        sameDay : '[Сегодня, ] LT [GMT]Z',
        nextDay : '[Завтра, ] LT [GMT]Z',
        lastWeek : 'D MMM [в] LT',
        nextWeek : 'D MMM [в] LT',
        sameElse : 'L'
    };

    return (
        <Link to={`/profile/orders/${data.id}`} className={`${styles.ordersItem} pt-6 pl-6 pr-6 pb-6`} onClick={handleModalOpen}>
            <div className={`${styles.ordersItem__header} pb-6`}>
                <p className="text text_type_digits-default">
                    #{data.number}
                </p>
                <p className="text text_type_main-default text_color_inactive">
                    <Moment date={data.date} locale="ru" calendar={calendarStrings} />
                </p>
            </div>

            <p className="text text_type_main-medium pb-2">
                {data.name}
            </p>

            <p className={`${data.status === "done" && styles.order__success} text text_type_main-default mb-6`}>
                {data.status === "created" && "Создан"}
                {data.status === "pending" && "Готовится"}
                {data.status === "done" && "Выполнен"}
            </p>

            <div className={styles.ordersItem__footer}>
                <div className={styles.ordersItem__ingredients}>
                    {ingredientsList}
                </div>
                <div className={`${styles.ordersItem__price} ml-6`}>
                    <p className="text text_type_digits-default pr-2">{data.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </Link>
    )

}
