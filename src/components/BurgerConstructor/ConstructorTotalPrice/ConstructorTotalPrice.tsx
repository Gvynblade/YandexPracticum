import React, { FunctionComponent } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Styles from './ConstructorTotalPrice.module.scss'

const ConstructorTotalPrice : FunctionComponent<any> = props => {
    return <div className={`${Styles.priceBox} pt-10`}>
        <span className="text text_type_digits-medium pr-3">{props.price}</span>
        <span className={`${Styles.priceIcon} pr-10`} ><CurrencyIcon type="primary" /></span>

        <Button type="primary" size="medium">
            Оформить заказ
        </Button>

    </div>
}

export default ConstructorTotalPrice
