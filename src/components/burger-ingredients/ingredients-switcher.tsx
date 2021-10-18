import React from 'react';
import { useSelector} from '../../services/hooks'
import styles from './ingredients-switcher.module.scss'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

const IngredientsSwitcher: React.FC = () => {

    const {currentTab} = useSelector( store => store.burgerIngredients)

    return (
        <div className={styles.block}>
            <Tab value="one" active={currentTab === 'buns'} onClick={()=>{}}>
                Булки
            </Tab>
            <Tab value="sauces" active={currentTab === 'sauces'} onClick={()=>{}}>
                Соусы
            </Tab>
            <Tab value="mains" active={currentTab === 'mains'} onClick={()=>{}}>
                Начинки
            </Tab>
        </div>
    )
}

export default IngredientsSwitcher;
