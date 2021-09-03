import React from 'react';
import PropTypes from 'prop-types';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './constructor-total-price.module.scss'
import { modalToggler } from '../../../../utils/modal-toggler'
import Modal from '../../../modal/modal'
import OrderDetails from '../order-details/order-details'
import orderIcon from '../../../../images/order-icon.svg'
import { ordersAPI } from '../../../../api/api'

const ConstructorTotalPrice = props => {

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [orderData, setOrderData] = React.useState({
        orderID: Number("0"),
        statusIcon: orderIcon,
        orderStatus: 'Ваш заказ начали готовить',
        orderDescription: 'Дождитесь готовности на орбитальной станции'
    });

    React.useEffect( () => {
        if (isModalOpen && orderData.orderID === 0) {
            ordersAPI.postOrder(props.data.ingredientsID, orderData, setOrderData)
        }
    }, [isModalOpen, orderData.orderID])

    return <>
        <div className={`${styles.priceBox} pt-10`}>
            <span className="text text_type_digits-medium pr-3">{props.data.totalPrice}</span>
            <span className={`${styles.priceIcon} pr-10`} ><CurrencyIcon type="primary" /></span>

            <Button type="primary" size="medium" onClick={() => modalToggler(isModalOpen, setIsModalOpen)}>
                Оформить заказ
            </Button>

        </div>
        {isModalOpen &&
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <OrderDetails data={orderData}/>
            </Modal>
        }
    </>
}

ConstructorTotalPrice.propTypes = {
    data: PropTypes.shape({
        ingredientsID: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        totalPrice: PropTypes.number.isRequired
    })
}

export default ConstructorTotalPrice
