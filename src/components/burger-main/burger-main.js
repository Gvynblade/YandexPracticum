import React from 'react';
import styles from './burger-main.module.scss'
import BurgerIngredients from './burger-ingredients/burger-ingredients';
import BurgerConstructor from './burger-constructor/burger-constructor';

const BurgerMain = () => {
    return(
        <main className={`${styles.BurgerMain} container pl-5 pr-5`}>
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
    )
}

export default BurgerMain;
