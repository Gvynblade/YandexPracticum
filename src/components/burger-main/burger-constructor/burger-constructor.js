import React from 'react';
import styles from './burger-constructor.module.scss';
import ConstructorIngredients from './constructor-ingredients/constructor-ingredients';
import ConstructorTotalPrice from './constructor-total-price/constructor-total-price'
import { IngredientsContext } from '../../../context/context'


const BurgerConstructor = () => {

    const data = React.useContext(IngredientsContext)

    let burgerItems = {
        bun: data[1],
        ingredients: [...data],
    }

    let orderData = {
        ingredientsID: [burgerItems.bun._id, burgerItems.bun._id],
        totalPrice: burgerItems.bun.price * 2
    };

    burgerItems.ingredients = burgerItems.ingredients.filter( (i) => {
        return i.type !== "bun" && i.price < 1000
    })

    burgerItems.ingredients.forEach( (i) => {
        orderData.ingredientsID.push(i._id)
        orderData.totalPrice += i.price;
    })

    return (
        <section className={`${styles.section} pt-25 pl-4 pr-4`}>
            <ConstructorIngredients burgerItems={burgerItems} />
            <ConstructorTotalPrice data={orderData} />
        </section>
    )

}

export default BurgerConstructor;
