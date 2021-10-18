import React from 'react';
import {useSelector} from '../../services/hooks'
import styles from './feed-left.module.scss';
import { FeedOrderElement } from './'
import { TOrder, TOrderElement, TIngredient } from '../../services/types/data'

type TProps = {
    orders: TOrder[]
}

const FeedLeftColumn: React.FC<TProps> = ({orders}) => {

    const {ingredients} = useSelector( store => store.burgerIngredients)

    const orderElements: React.ReactElement[] = []

    orders.forEach( (item, index) => {
        if (item.ingredients && item.ingredients.length > 0 && item._id) {
            let element : TOrderElement = {
                id: item._id,
                number: item.number,
                date: item.createdAt,
                name: item.name,
                ingredientsImages: [],
                price: null
            }

            item.ingredients.forEach( id => {
                let ingredient = ingredients.find( (i : TIngredient) => i._id === id)
                if(ingredient) {
                    element.ingredientsImages.push({name: ingredient.name, image: ingredient.image_mobile})
                    element.price! += ingredient.price
                }
            })

            orderElements.push(
                <FeedOrderElement  data={element} key={index}/>
            )
        }
    })

    return (
        <section className={`${styles.feedColumn} pr-2`}>
            {orderElements}
        </section>
    )
}

export default FeedLeftColumn
