import React from 'react';
import {useDispatch} from 'react-redux';
import styles from './burger-ingredients.module.scss'
import { IngredientsSwitcher } from './'
import { IngredientsBox } from './'
import { requestIngredients } from '../../services/actions/ingredients'


const BurgerIngredients = () => {

    const dispatch = useDispatch()

    React.useEffect( () => {
        dispatch(requestIngredients())
    }, [dispatch])

    return (
        <section className={styles.section}>
            <h1 className="text text_type_main-large mt-10  mb-5">Соберите бургер</h1>
                <IngredientsSwitcher />
                <IngredientsBox />
        </section>
    )

}

export default BurgerIngredients;
