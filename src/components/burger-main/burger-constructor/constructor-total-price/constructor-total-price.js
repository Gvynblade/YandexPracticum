import React, {useEffect} from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import styles from './constructor-total-price.module.scss'
import { modalToggler } from '../../../../utils/modal-toggler'
import Modal from '../../../modal/modal'
import OrderDetails from '../order-details/order-details'
import { DataOblectPropTypes } from '../../../../utils/types'

const ConstructorTotalPrice = ({ingredients, bun}) => {

    const { price } = useSelector( store => store.order)
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [ingredientsID, setIngredientsID] = React.useState([]);

    useEffect( () => {
        setIngredientsID(bun ? [bun._id, bun._id] : [])
        ingredients.forEach(i => {
            setIngredientsID([...ingredientsID, i._id])
        })
    }, [ingredients, bun])

    return <>
        <div className={`${styles.priceBox} pt-10 pb-10`}>
            <span className="text text_type_digits-medium pr-3">{price}</span>
            <span className={`${styles.priceIcon} pr-10`} ><CurrencyIcon type="primary" /></span>

            <Button type="primary" size="medium" onClick={() => modalToggler(isModalOpen, setIsModalOpen)}>
                Оформить заказ
            </Button>

        </div>
        {isModalOpen &&
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <OrderDetails ingredientsID={ingredientsID} />
            </Modal>
        }
    </>
}

ConstructorTotalPrice.propTypes = {
    bun: DataOblectPropTypes.isRequired,
    ingredients: PropTypes.arrayOf(DataOblectPropTypes.isRequired).isRequired
}

export default ConstructorTotalPrice
