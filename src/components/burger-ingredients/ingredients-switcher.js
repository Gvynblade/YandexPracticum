import React from 'react';
import { useSelector} from 'react-redux'
import styles from './ingredients-switcher.module.scss'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

const IngredientsSwitcher = () => {

    const {currentTab} = useSelector( store => store.burgerIngredients)

    return (
        <div className={styles.block}>
            <Tab value="one" active={currentTab === 'buns'} >
                Булки
            </Tab>
            <Tab value="sauces" active={currentTab === 'sauces'} >
                Соусы
            </Tab>
            <Tab value="mains" active={currentTab === 'mains'} >
                Начинки
            </Tab>
        </div>
    )
}

export default IngredientsSwitcher;
