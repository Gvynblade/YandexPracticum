import React from 'react';
import PropTypes from 'prop-types';
import Styles from './burgerMain.module.scss'
import BurgerIngredients from './burgerIngredients/burgerIngredients';
import BurgerConstructor from './burgerConstructor/burgerConstructor';
import { DataOblectPropTypes } from '../../utils/types.js'

const BurgerMain = (props) => {
    return(
        <main className={`${Styles.BurgerMain} container pl-5 pr-5`}>
            <BurgerIngredients data={props.data} />
            <BurgerConstructor data={props.data} />
        </main>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(DataOblectPropTypes.isRequired).isRequired
}

export default BurgerMain;
