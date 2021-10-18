import React, { useEffect } from 'react';
import {useSelector, useDispatch} from '../../services/hooks';
import { useDrop } from "react-dnd";
import styles from './burger-constructor.module.scss';
import { ConstructorIngredients } from './';
import { ConstructorTotalPrice } from './'
import { INCREASE_ITEM_COUNTER } from '../../services/actions/ingredients'
import { ADD_INGREDIENT } from '../../services/actions/constructor'
import { CALCULATE_ORDER_PRICE } from '../../services/actions/order'
import { TIngredient } from '../../services/types/data'


const BurgerConstructor: React.FC = () => {

    const { ingredients, bun } = useSelector( store => store.burgerConstructor)
    const  ingredientsData = useSelector( store => store.burgerIngredients.ingredients)

    const dispatch = useDispatch()

    const isHasBun = bun !== null;

    const [{isHover}, dropTarget] = useDrop({
        accept: "ingredient",
        drop(itemId: TIngredient) {
            onDropHandler(itemId);
        },
        collect: monitor => ({
            isHover: monitor.isOver(),
        })
    });

    const onDropHandler = (item: TIngredient) => {
        let element = ingredientsData.find( (i: TIngredient) => i._id === item._id)
        element!.hash = item._id + Math.floor(Math.random() * 100)
        dispatch({
            type: ADD_INGREDIENT,
            item: element
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

                { isHasBun && <ConstructorIngredients ingredients={ingredients} bun={bun!} /> }

            </div>

            { isHasBun && <ConstructorTotalPrice ingredients={ingredients} bun={bun!}/> }

        </section>
    )

}

export default BurgerConstructor;
