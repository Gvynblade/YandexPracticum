import React from 'react';
import PropTypes from 'prop-types';
import Styles from './burgerIngredients.module.scss'
import IngredientsSwitcher from './ingredientsSwitcher/ingredientsSwitcher'
import IngredientsBox from './ingredientsBox/ingredientsBox'
import { DataOblectPropTypes } from '../../../utils/types.js'


const BurgerIngredients = props => {

    return (
        <section className={Styles.section}>
            <h1 className="text text_type_main-large mt-10  mb-5">Соберите бургер</h1>

            <IngredientsSwitcher />
            <IngredientsBox data={props.data} />
        </section>
    )

}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(DataOblectPropTypes.isRequired).isRequired
}

export default BurgerIngredients;
