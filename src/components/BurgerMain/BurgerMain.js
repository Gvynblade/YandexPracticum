import React from 'react';
import PropTypes from 'prop-types';
import Styles from './BurgerMain.module.scss'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import BurgerConstructor from './BurgerConstructor/BurgerConstructor';
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
