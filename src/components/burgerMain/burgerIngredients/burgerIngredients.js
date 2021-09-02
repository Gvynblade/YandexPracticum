import React from 'react';
import Styles from './burgerIngredients.module.scss'
import IngredientsSwitcher from './ingredientsSwitcher/ingredientsSwitcher'
import IngredientsBox from './ingredientsBox/ingredientsBox'


const BurgerIngredients = () => {

    return (
        <section className={Styles.section}>
            <h1 className="text text_type_main-large mt-10  mb-5">Соберите бургер</h1>

            <IngredientsSwitcher />
            <IngredientsBox />
        </section>
    )

}

export default BurgerIngredients;
