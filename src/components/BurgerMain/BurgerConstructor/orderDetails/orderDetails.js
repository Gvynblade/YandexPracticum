import React from 'react';
import PropTypes from 'prop-types';
import Styles from './orderDetails.module.scss'
import Modal from '../../../Modal/modal'

const OrderDetails = (props) => {

    return (
        <Modal onClose={() => props.modalToggler(props.isModal, props.setIsModal)}>

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

        </Modal>
    )

}

OrderDetails.propTypes = {
    modalToggler: PropTypes.func,
    isModal:PropTypes.bool,
    setIsModal: PropTypes.func,
    data: PropTypes.shape({
        orderID: PropTypes.number,
        statusIcon: PropTypes.string,
        orderStatus: PropTypes.string,
        orderDescription: PropTypes.string
    })
}

export default OrderDetails;
