import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styles from './profile-orders-history.module.scss'
import { ProfileOrdersItem } from './'
import { WS_CONNECTION_START, WS_CONNECTION_STOP} from '../../services/actions/web-socket'
import Preloader from '../common/preloader'

export const ProfileOrdersHistory = () => {

    const {wsConnected, data} = useSelector( store => store.webSocket)
    const {ingredients} = useSelector( store => store.burgerIngredients)
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch({
            type: WS_CONNECTION_START,
            payload: {
                url: 'wss://norma.nomoreparties.space/orders',
                isToken: true
            }
        })
        return () => {
            dispatch({ type: WS_CONNECTION_STOP})
        }
    }, [dispatch])

    const orderElements = []

    if (data.orders) {
        data.orders.forEach( (item, index) => {
            if (item.ingredients.length > 0) {
                let element = {
                    id: item._id,
                    number: item.number,
                    date: item.createdAt,
                    name: item.name,
                    status: item.status,
                    ingredientsImages: [],
                    price: null
                }

                item.ingredients.forEach( id => {
                    let item = ingredients.find( i => i._id === id)
                    element.ingredientsImages.push({name: item.name, image: item.image_mobile})
                    element.price += item.price
                })

                orderElements.push(
                    <ProfileOrdersItem  data={element} key={index}/>
                )
            }
        })
    }

    return data.success && data.orders ? (
        <div className={`${styles.orders} pr-2`}>
            {orderElements.reverse()}
        </div>
    )
    : (<Preloader />)

}
