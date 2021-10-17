import React, { useEffect,useState } from 'react';
import { useParams, useLocation } from 'react-router-dom'
import Moment from 'react-moment';
import 'moment/locale/ru';
import 'moment-timezone';
import styles from './order-details.module.scss'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector, useDispatch } from '../../services/hooks';
import { requestUserOrders, requestAllOrders} from '../../services/actions/order'
import Preloader from '../common/preloader'
import { TOrder, TIngredient } from '../../services/types/data'

const OrderDetails: React.FC = () => {

    const {ingredients, ingredientsSuccess} = useSelector( store => store.burgerIngredients)
    const {ordersList, ordersListRequest, ordersListSuccess} = useSelector( store => store.order)
    const location = useLocation()
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch()
    const [isWrongID, setIsWrongID] = useState(false)
    const [isFetching, setIsFetching] = useState(true)

    let orderPrice = 0
    let order = null
    const ingredientsList = []
    useEffect( () => {
        location.pathname.indexOf('/profile/orders') !== -1 ?
        dispatch(requestUserOrders())
        :
        dispatch(requestAllOrders())
        setIsFetching(false)
    }, [])

    if (ordersListSuccess && !ordersListRequest && !isFetching && ingredientsSuccess) {

        order = ordersList.find( (element: TOrder) => element._id === id)
        if(!order) {setIsWrongID(true)} else {

            let ingredients2 = order!.ingredients!.reduce((acc: any, rec: any) => {
                return (typeof acc[rec] !== 'undefined')
                ? { ...acc, [rec]: acc[rec] + 1 }
                : { ...acc, [rec]: 1 }
            }, {})

            for (var key in ingredients2) {

                let element = ingredients.find( (i:TIngredient) => i._id === key)
                orderPrice+= ingredients2[key] * element!.price
                ingredientsList.push(
                    <div className={`${styles.ingredient} mt-4`} key={key}>
                        <div className={styles.ingredient_img}>
                            <img src={element!.image_mobile} alt={element!.name} />
                        </div>

                        <p className={`${styles.ingredient__title} text text_type_main-default pl-4`}>
                            {element!.name}
                        </p>

                        <span className={styles.ingredient__price}>
                            <p className="text text_type_digits-default mr-2"> {ingredients2[key]} x {element!.price}</p>
                            <CurrencyIcon type="primary" />
                        </span>

                    </div>
                )

            }

        }

    }

    const calendarStrings = {
        lastDay : '[Вчера, ] LT [GMT]Z',
        sameDay : '[Сегодня, ] LT [GMT]Z',
        nextDay : '[Завтра, ] LT [GMT]Z',
        lastWeek : 'D MMM [в] LT',
        nextWeek : 'D MMM [в] LT',
        sameElse : 'L'
    };

    return ordersListSuccess && ingredientsSuccess && !isWrongID && order ? (
        <div className={styles.order__box}>
            <p className={`${styles.order__number} text text_type_digits-default mb-10`}>
                #{order.number}
            </p>

            <p className="text text_type_main-medium pb-3">
                {order.name}
            </p>

            <p className={`${order.status === "done" && styles.order__success} text text_type_main-default mb-15`}>
                {order.status === "created" && "Создан"}
                {order.status === "pending" && "Готовится"}
                {order.status === "done" && "Выполнен"}
            </p>

            <p className="text text_type_main-medium pb-2">
                Состав:
            </p>

            <div className={`${styles.order__ingredientsBox} pr-6`}>

                {ingredientsList}

            </div>

            <div className={`${styles.order__footer} mt-10`}>

                <p className="text text_type_main-default text_color_inactive">
                    <Moment date={order.createdAt} locale="ru" calendar={calendarStrings} />
                </p>

                <span className={styles.order__price}>
                    <p className="text text_type_digits-default pr-2">{orderPrice}</p>
                    <CurrencyIcon type="primary" />
                </span>

            </div>

        </div>
    ) : (<Preloader/>)
}

export default OrderDetails;
