import React from 'react';
import Styles from './burgerMain.module.scss'
import BurgerIngredients from './burgerIngredients/burgerIngredients';
import BurgerConstructor from './burgerConstructor/burgerConstructor';

const BurgerMain = () => {
    return(
        <main className={`${Styles.BurgerMain} container pl-5 pr-5`}>
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
    )
}

export default BurgerMain;
