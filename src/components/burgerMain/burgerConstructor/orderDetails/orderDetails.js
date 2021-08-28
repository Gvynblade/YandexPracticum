import React from 'react';
import PropTypes from 'prop-types';
import Styles from './orderDetails.module.scss'

const OrderDetails = (props) => {

    return (


            <div className={Styles.modalFlex}>
                <p className="text text_type_digits-large pt-8 pb-8">{props.data.orderID}</p>
                <p className="text text_type_main-medium pb-15">
                    идентификатор заказа
                </p>

                <img src={props.data.statusIcon} alt="Order Icon" className="pb-15"/>

                <p className="text text_type_main-default">
                    {props.data.orderStatus}
                </p>

                <p className={`${Styles.secondaryColor} text text_type_main-default pb-15`}>
                    {props.data.orderDescription}
                </p>

            </div>
    )

}

OrderDetails.propTypes = {
    data: PropTypes.shape({
        orderID: PropTypes.number.isRequired,
        statusIcon: PropTypes.string.isRequired,
        orderStatus: PropTypes.string.isRequired,
        orderDescription: PropTypes.string.isRequired
    })
}

export default OrderDetails;
