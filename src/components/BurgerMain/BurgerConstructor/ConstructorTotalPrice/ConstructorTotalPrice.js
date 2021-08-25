import React from 'react';
import PropTypes from 'prop-types';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Styles from './ConstructorTotalPrice.module.scss'
import { modalToggler } from '../../../../utils/modalToggler'
import OrderDetails from '../orderDetails/orderDetails'
import orderIcon from '../../../../images/order-icon.svg'

const ConstructorTotalPrice = props => {

    let [isModal, setIsModal] = React.useState(false);
    let [orderData, setOrderData] = React.useState({
        orderID: Number("034536"),
        statusIcon: orderIcon,
        orderStatus: 'Ваш заказ начали готовить',
        orderDescription: 'Дождитесь готовности на орбитальной станции'
    });

    return <>
        <div className={`${Styles.priceBox} pt-10`}>
            <span className="text text_type_digits-medium pr-3">{props.price}</span>
            <span className={`${Styles.priceIcon} pr-10`} ><CurrencyIcon type="primary" /></span>

            <Button type="primary" size="medium" onClick={() => modalToggler(isModal, setIsModal)}>
                Оформить заказ
            </Button>

        </div>
        {isModal && <OrderDetails modalToggler={modalToggler} isModal={isModal} setIsModal={setIsModal} data={orderData}/>}
    </>
}

ConstructorTotalPrice.propTypes = {
    price: PropTypes.number.isRequired
}

export default ConstructorTotalPrice
