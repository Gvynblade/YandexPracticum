import React from 'react';
import styles from './order.module.scss'
import OrderDetails from '../order/order-details'

const OrderPage = () => {

    return (
        <main className={`${styles.order} container`}>
            <OrderDetails />
        </main>
    )
}

export default OrderPage
