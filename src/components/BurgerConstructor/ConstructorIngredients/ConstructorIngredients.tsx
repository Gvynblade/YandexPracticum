import React, { FunctionComponent } from 'react';
import './ConstructorIngredients.scss'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const ConstructorIngredients: FunctionComponent<any> = (props) => {
    return (
        <div className="constructorElement__box" >

            <div className="constructorElement__item pl-8" >
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={props.burgerItems.bunTop.name}
                    price={props.burgerItems.bunTop.price}
                    thumbnail={props.burgerItems.bunTop.image_mobile}
                />
            </div>

            <div className="constructorElement__scrollable" >
                {props.burgerItems.ingredients.map( (i:any) => {
                    return (
                        <div className="constructorElement__item" key={i._id}>
                            <button className="constructorElement__itemDrag">
                                <DragIcon type="primary" />
                            </button>

                            <ConstructorElement
                                text={i.name}
                                price={i.price}
                                thumbnail={i.image_mobile}
                            />
                        </div>
                    )
                })}
            </div>

            <div className="constructorElement__item pl-8" >
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={props.burgerItems.bunBottom.name}
                    price={props.burgerItems.bunBottom.price}
                    thumbnail={props.burgerItems.bunBottom.image_mobile}
                />
            </div>

        </div>
    )
}

export default ConstructorIngredients;
