import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './feed.module.scss';
import { FeedLeftColumn, FeedRightColumn } from '../feed-components'
import { WS_CONNECTION_START, WS_CONNECTION_STOP} from '../../services/actions/web-socket'
import Preloader from '../common/preloader'

const FeedPage = () => {

    const {data} = useSelector( store => store.webSocket)
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch({
            type: WS_CONNECTION_START,
            payload: {
                url: 'wss://norma.nomoreparties.space/orders/all',
                isToken: true
            }
        })
        return () => {
            dispatch({ type: WS_CONNECTION_STOP})
        }
    }, [dispatch])



    return data.success && data.orders.length > 0 ? (
        <main className={`${styles.feed} container pl-5 pr-5 pt-10`}>

            <p className={`${styles.feed__heading} text text_type_main-large pb-5`}>
                Лента заказов
            </p>

            <FeedLeftColumn orders={data.orders} />
            <FeedRightColumn orders={data.orders} total={data.total} totalToday={data.totalToday}/>

        </main>
    )
    : (<Preloader />)
}

export default FeedPage
