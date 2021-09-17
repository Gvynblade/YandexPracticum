import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useDrop } from "react-dnd";
import styles from './burger-constructor.module.scss';
import ConstructorIngredients from './constructor-ingredients/constructor-ingredients';
import ConstructorTotalPrice from './constructor-total-price/constructor-total-price'
import { INCREASE_ITEM_COUNTER } from '../../../services/actions/ingredients'
import { ADD_INGREDIENT } from '../../../services/actions/constructor'
import { CALCULATE_ORDER_PRICE } from '../../../services/actions/order'


const BurgerConstructor = () => {

    const { ingredients, bun } = useSelector( store => store.burgerConstructor)
    const  ingredientsData = useSelector( store => store.burgerIngredients.ingredients)

    const dispatch = useDispatch()

    const isHasBun = bun !== null;

    const [{isHover}, dropTarget] = useDrop({
        accept: "ingredient",
        drop(itemId) {
            onDropHandler(itemId);
        },
        collect: monitor => ({
            isHover: monitor.isOver(),
        })
    });

    const onDropHandler = (item) => {
        dispatch({
            type: ADD_INGREDIENT,
            item: ingredientsData.find( i => i._id === item._id)
        })
        dispatch({
            type: INCREASE_ITEM_COUNTER,
            id: item._id
        })
    }

    useEffect( () => {
        dispatch({
            type: CALCULATE_ORDER_PRICE,
            bun,
            ingredients
        })
    }, [dispatch, ingredients, bun])

    return (
        <section className={`${styles.section} pt-25 pl-4 pr-4`}>

            <div ref={dropTarget}
            className={`${styles.dropbox} ${isHover && styles.dropHover} ${!isHasBun && styles.placeholder}`}>

                { !isHasBun &&
                    <p className="text text_type_main-default">
                        Пожалуйста, перетащите сюда тип предпочитаемой булки
                    </p> }

                { isHasBun && <ConstructorIngredients ingredients={ingredients} bun={bun} /> }

            </div>

            { isHasBun && <ConstructorTotalPrice ingredients={ingredients} bun={bun}/> }

        </section>
    )

}

export default BurgerConstructor;
