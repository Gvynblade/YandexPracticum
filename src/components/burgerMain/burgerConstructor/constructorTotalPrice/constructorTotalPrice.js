import React from 'react';
import PropTypes from 'prop-types';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Styles from './constructorTotalPrice.module.scss'
import { modalToggler } from '../../../../utils/modalToggler'
import Modal from '../../../modal/modal'
import OrderDetails from '../orderDetails/orderDetails'
import orderIcon from '../../../../images/order-icon.svg'
import { ordersAPI } from '../../../../api/api'

const ConstructorTotalPrice = props => {

    const [isModal, setIsModal] = React.useState(false);
    const [orderData, setOrderData] = React.useState({
        orderID: Number("0"),
        statusIcon: orderIcon,
        orderStatus: 'Ваш заказ начали готовить',
        orderDescription: 'Дождитесь готовности на орбитальной станции'
    });

    React.useEffect( () => {
        if (isModal && orderData.orderID === 0) {
            ordersAPI.postOrder(props.data.IngredientsID, orderData, setOrderData)
        }
    }, [isModal, orderData.orderID])

    return <>
        <div className={`${Styles.priceBox} pt-10`}>
            <span className="text text_type_digits-medium pr-3">{props.data.totalPrice}</span>
            <span className={`${Styles.priceIcon} pr-10`} ><CurrencyIcon type="primary" /></span>

            <Button type="primary" size="medium" onClick={() => modalToggler(isModal, setIsModal)}>
                Оформить заказ
            </Button>

        </div>
        {isModal &&
            <Modal isModal={isModal} setIsModal={setIsModal}>
                <OrderDetails data={orderData}/>
            </Modal>
        }
    </>
}

ConstructorTotalPrice.propTypes = {
    data: PropTypes.shape({
        IngredientsID: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        totalPrice: PropTypes.number.isRequired
    })
}

export default ConstructorTotalPrice
