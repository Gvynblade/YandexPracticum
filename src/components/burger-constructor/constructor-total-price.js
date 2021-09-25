import React, {useEffect} from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import styles from './constructor-total-price.module.scss'
import Modal from '../modal/modal'
import { OrderDetails } from './'
import { DataOblectPropTypes } from '../../utils/types'
import { useHistory } from 'react-router-dom'
import { requestOrderData } from '../../services/actions/order'
import { MODAL_OPEN } from '../../services/actions/app'

const ConstructorTotalPrice = ({ingredients, bun}) => {

    const dispatch = useDispatch()
    const history = useHistory()

    const { price } = useSelector( store => store.order)
    const { isModalOpen, modalType } = useSelector( store => store.app)
    const { isAuthorised } = useSelector( store => store.auth)

    const [ingredientsID, setIngredientsID] = React.useState([]);

    useEffect( () => {
        setIngredientsID(bun ? [bun._id, bun._id] : [])
        ingredients.forEach(i => {
            setIngredientsID([...ingredientsID, i._id])
        })
    }, [ingredients, bun])

    const handleCreateOrder = () => {
        if ( isAuthorised ) {
            dispatch(requestOrderData(ingredientsID))
            dispatch({
                type: MODAL_OPEN,
                payload: {
                    isModalOpen: true,
                    modalType: 'order'
                }
            })
        } else {
            history.push('/login')
        }
    }

    return <>
        <div className={`${styles.priceBox} pt-10 pb-10`}>
            <span className="text text_type_digits-medium pr-3">{price}</span>
            <span className={`${styles.priceIcon} pr-10`} ><CurrencyIcon type="primary" /></span>

            <Button type="primary" size="medium" onClick={handleCreateOrder}>
                Оформить заказ
            </Button>

        </div>
        {isModalOpen && modalType === 'order' &&
            <Modal>
                <OrderDetails />
            </Modal>
        }
    </>
}

ConstructorTotalPrice.propTypes = {
    bun: DataOblectPropTypes.isRequired,
    ingredients: PropTypes.arrayOf(DataOblectPropTypes.isRequired).isRequired
}

export default ConstructorTotalPrice
