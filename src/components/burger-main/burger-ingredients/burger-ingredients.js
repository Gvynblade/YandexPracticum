import React from 'react';
import styles from './burger-ingredients.module.scss'
import IngredientsSwitcher from './ingredients-switcher/ingredients-switcher'
import IngredientsBox from './ingredients-box/ingredients-box'


const BurgerIngredients = () => {

    return (
        <section className={styles.section}>
            <h1 className="text text_type_main-large mt-10  mb-5">Соберите бургер</h1>

            <IngredientsSwitcher />
            <IngredientsBox />
        </section>
    )

}

export default BurgerIngredients;
