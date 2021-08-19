import React from 'react';
import PropTypes from 'prop-types';
import Styles from './BurgerConstructor.module.scss';
import ConstructorIngredients from './ConstructorIngredients/ConstructorIngredients';
import ConstructorTotalPrice from './ConstructorTotalPrice/ConstructorTotalPrice'
import { DataOblectPropTypes } from '../../../utils/types.js'


const BurgerConstructor = props => {

    let burgerItems = {
        bunTop: props.data[14],
        ingredients: [...props.data],
        bunBottom: props.data[14]
    }

    let totalPrice = burgerItems.bunTop.price + burgerItems.bunBottom.price;

    burgerItems.ingredients = burgerItems.ingredients.filter( (i) => {
        return i.type !== "bun"
    })

    burgerItems.ingredients.forEach( (i) => {
        totalPrice += i.price;
    })

    return (
        <section className={`${Styles.section} pt-25 pl-4 pr-4`}>
            <ConstructorIngredients burgerItems={burgerItems} />
            <ConstructorTotalPrice price={totalPrice} />
        </section>
    )

}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(DataOblectPropTypes.isRequired).isRequired
}

export default BurgerConstructor;
