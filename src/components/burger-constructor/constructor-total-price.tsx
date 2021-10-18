import React from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import {useDispatch, useSelector} from '../../services/hooks';
import styles from './constructor-total-price.module.scss'
import Modal from '../modal/modal'
import { OrderDetails } from './'
import { useHistory } from 'react-router-dom'
import { requestOrderData } from '../../services/actions/order'
import { MODAL_OPEN } from '../../services/actions/app'
import { TIngredient } from '../../services/types/data'

type TProps = {
    bun: TIngredient;
    ingredients: TIngredient[]
}

const ConstructorTotalPrice: React.FC<TProps> = ({ingredients, bun}) => {

    const dispatch = useDispatch()
    const history = useHistory()

    const { price } = useSelector( store => store.order)
    const { isModalOpen, modalType } = useSelector( store => store.app)
    const { isAuthorised } = useSelector( store => store.auth)

    const handleCreateOrder = () => {
        if ( isAuthorised ) {
            const ingredientsID: string[] = []
            bun && ingredientsID.push(bun._id, bun._id)
            ingredients.forEach(i => {
                ingredientsID.push(i._id)
            })
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

export default ConstructorTotalPrice
