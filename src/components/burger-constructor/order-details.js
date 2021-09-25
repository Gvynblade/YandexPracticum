import React from 'react';
import {useSelector} from 'react-redux';
import styles from './order-details.module.scss'
import Preloader from '../../components/common/preloader'

const OrderDetails = (props) => {

    const {orderData, orderDataRequest} = useSelector(store => store.order)

    return orderDataRequest ? (<Preloader />) : (
            <div className={styles.modalFlex}>
                <p className="text text_type_digits-large pt-8 pb-8">{orderData.orderID}</p>
                <p className="text text_type_main-medium pb-15">
                    идентификатор заказа
                </p>

                <img src={orderData.statusIcon} alt="Order Icon" className="pb-15"/>

                <p className="text text_type_main-default">
                    {orderData.orderStatus}
                </p>

                <p className={`${styles.secondaryColor} text text_type_main-default pb-15`}>
                    {orderData.orderDescription}
                </p>

            </div>
    )

}

export default OrderDetails;
