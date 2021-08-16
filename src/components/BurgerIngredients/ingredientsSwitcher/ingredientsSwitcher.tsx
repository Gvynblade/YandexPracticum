import React from 'react';
import Styles from './ingredientsSwitcher.module.scss'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

const IngredientsSwitcher = () => {
    const [current, setCurrent] = React.useState('one')
    return (
        <div className={Styles.block}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
        </Tab>
        </div>
    )
}

export default IngredientsSwitcher;
