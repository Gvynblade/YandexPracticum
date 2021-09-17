import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './order-details.module.scss'
import { requestOrderData } from '../../../../services/actions/order'

const OrderDetails = (props) => {

    const orderData = useSelector(store => store.order.orderData)

    const dispatch = useDispatch()

    React.useEffect( () => {
        dispatch(requestOrderData(props.ingredientsID))
    }, [])

    return (
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

OrderDetails.propTypes = {
    ingredientsID: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired
}

export default OrderDetails;
