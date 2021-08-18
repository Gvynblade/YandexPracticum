import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import Styles from './BurgerConstructor.module.scss';
import ConstructorIngredients from './ConstructorIngredients/ConstructorIngredients';
import ConstructorTotalPrice from './ConstructorTotalPrice/ConstructorTotalPrice'


const BurgerConstructor: FunctionComponent<any> = props => {

    let burgerItems = {
        bunTop: props.data[0],
        ingredients: props.data,
        bunBottom: props.data[14]
    }

    let totalPrice : Number = burgerItems.bunTop.price + burgerItems.bunBottom.price;

    burgerItems.ingredients.forEach( (i:any) => {
        totalPrice += i.price;
    })

    return (
        <section className={`${Styles.section} pt-25 pl-4 pr-4`}>
            <ConstructorIngredients burgerItems={burgerItems} />
            <ConstructorTotalPrice price={totalPrice} />
        </section>
    )

}

let DataOblectPropTypes = PropTypes.shape({
    "_id": PropTypes.any.isRequired,
    "name": PropTypes.string.isRequired,
    "type": PropTypes.string.isRequired,
    "proteins": PropTypes.number.isRequired,
    "fat": PropTypes.number.isRequired,
    "carbohydrates": PropTypes.number.isRequired,
    "calories": PropTypes.number.isRequired,
    "price": PropTypes.number.isRequired,
    "image": PropTypes.string.isRequired,
    "image_mobile": PropTypes.string.isRequired,
    "image_large": PropTypes.string.isRequired,
    "__v":PropTypes.number.isRequired
});

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(DataOblectPropTypes.isRequired)
}

export default BurgerConstructor;
