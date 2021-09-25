import React, {useEffect, useState} from 'react';
import IngredientDetails from '../burger-ingredients/ingredient-details'
import { useSelector, useDispatch } from 'react-redux';
import {requestIngredients} from '../../services/actions/ingredients'
import { useParams } from 'react-router-dom'
import { SET_MODAL_DATA } from '../../services/actions/ingredients'
import Preloader from '../common/preloader'
import styles from './ingredient.module.scss'
import icon from '../../images/warning-exclamation-mark-light-blue.svg'

const IngredientPage = () => {

    const {ingredients} = useSelector( store => store.burgerIngredients)
    const dispatch = useDispatch()
    const {id} = useParams()

    const [isFetching, setIsFetching] = useState(false)
    const [isWrongID, setIsWrongID] = useState(false)

    useEffect( () => {
        if (ingredients.length === 0) {
            setIsFetching(true)
            dispatch(requestIngredients())
        }
    }, [])

    useEffect( () => {
        if (ingredients.length > 0) {
            const ingredient = ingredients.find( item => item._id === id)
            if(!ingredient) {setIsWrongID(true)}
            dispatch({
                type: SET_MODAL_DATA,
                payload: {
                    modalData: ingredient
                }
            })
            setIsFetching(false)
        }
    }, [ingredients.length])

    return isFetching ? (
        <Preloader />
    ) : isWrongID ? (
        <main className={styles.ingredient}>
            <div className={styles.ingredient__wrongID}>
                <img src={icon} alt="Ingredient ID is wrong" />
                <p className="text text_type_main-medium">
                    Ошибка! Не правильный ID ингредиента!
                </p>
            </div>
        </main>
    ) : (
        <main className={styles.ingredient}>
            <p className="text text_type_main-large">Детали ингредиента</p>
            <IngredientDetails />
        </main>
    )
}

export default IngredientPage;
