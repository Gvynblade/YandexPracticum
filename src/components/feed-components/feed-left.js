import React from 'react';
import {useSelector} from 'react-redux'
import styles from './feed-left.module.scss';
import { FeedOrderElement } from './'

const FeedLeftColumn = ({orders}) => {

    const {ingredients} = useSelector( store => store.burgerIngredients)

    const orderElements = []

    orders.forEach( (item, index) => {
        if (item.ingredients.length > 0) {
            let element = {
                id: item._id,
                number: item.number,
                date: item.createdAt,
                name: item.name,
                ingredientsImages: [],
                price: null
            }

            item.ingredients.forEach( id => {
                let item = ingredients.find( i => i._id === id)
                element.ingredientsImages.push({name: item.name, image: item.image_mobile})
                element.price += item.price
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
