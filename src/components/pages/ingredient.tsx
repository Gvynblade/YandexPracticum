import React, {useEffect, useState} from 'react';
import IngredientDetails from '../burger-ingredients/ingredient-details'
import { useSelector, useDispatch } from '../../services/hooks';
import { useParams } from 'react-router-dom'
import { SET_MODAL_DATA, REMOVE_MODAL_DATA } from '../../services/actions/ingredients'
import Preloader from '../common/preloader'
import styles from './ingredient.module.scss'
import icon from '../../images/warning-exclamation-mark-light-blue.svg'
import { TIngredient } from '../../services/types/data'

const IngredientPage: React.FC = () => {

    const {ingredients, ingredientsRequest, ingredientsSuccess} = useSelector( store => store.burgerIngredients)
    const dispatch = useDispatch()
    const { id } = useParams<{ id: string }>();

    const [isFetching, setIsFetching] = useState(false)
    const [isWrongID, setIsWrongID] = useState(false)

    useEffect( () => {
        if (ingredients.length === 0) {
            setIsFetching(true)
        }
    }, [])

    useEffect( () => {
        if (ingredients.length > 0 && !ingredientsRequest && ingredientsSuccess !== false) {
            const ingredient = ingredients.find( (item: TIngredient) => item._id === id)
            if(!ingredient) {setIsWrongID(true)}
            dispatch({
                type: SET_MODAL_DATA,
                payload: {
                    modalData: ingredient
                }
            })
            setIsFetching(false)
        }
        return () => {
            dispatch({
                type: REMOVE_MODAL_DATA
            })
        }
    }, [ingredients.length])

    if ( ingredientsSuccess === false) {
        return (
            <main className={styles.ingredient}>
                <div className={styles.ingredient__wrongID}>
                    <img src={icon} alt="Ingredient ID is wrong" />
                    <p className="text text_type_main-medium">
                        Ошибка загрузки данных с сервера!
                    </p>
                </div>
            </main>
        )
    }

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
