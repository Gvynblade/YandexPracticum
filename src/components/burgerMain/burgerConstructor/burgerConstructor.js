import React from 'react';
import Styles from './burgerConstructor.module.scss';
import ConstructorIngredients from './constructorIngredients/constructorIngredients';
import ConstructorTotalPrice from './constructorTotalPrice/constructorTotalPrice'
import { IngredientsContext } from '../../../context/context'


const BurgerConstructor = () => {

    const data = React.useContext(IngredientsContext)

    let burgerItems = {
        bun: data[1],
        ingredients: [...data],
    }

    let orderData = {
        IngredientsID: [burgerItems.bun._id, burgerItems.bun._id],
        totalPrice: burgerItems.bun.price * 2
    };

    burgerItems.ingredients = burgerItems.ingredients.filter( (i) => {
        return i.type !== "bun" && i.price < 1000
    })

    burgerItems.ingredients.forEach( (i) => {
        orderData.IngredientsID.push(i._id)
        orderData.totalPrice += i.price;
    })

    return (
        <section className={`${Styles.section} pt-25 pl-4 pr-4`}>
            <ConstructorIngredients burgerItems={burgerItems} />
            <ConstructorTotalPrice data={orderData} />
        </section>
    )

}

export default BurgerConstructor;
