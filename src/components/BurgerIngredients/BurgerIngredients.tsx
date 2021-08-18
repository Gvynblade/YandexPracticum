import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import Styles from './BurgerIngredients.module.scss'
import IngredientsSwitcher from './ingredientsSwitcher/ingredientsSwitcher'
import IngredientsBox from './IngredientsBox/IngredientsBox'


const BurgerIngredients: FunctionComponent<any> = props => {

    return (
        <section className={Styles.section}>
            <h1 className="text text_type_main-large mt-10  mb-5">Соберите бургер</h1>

            <IngredientsSwitcher />
            <IngredientsBox data={props.data} />
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

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(DataOblectPropTypes.isRequired)
}

export default BurgerIngredients;
