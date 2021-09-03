import React from 'react';
import PropTypes from 'prop-types';
import './constructor-ingredients.scss'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { DataOblectPropTypes } from '../../../../utils/types.js'

const ConstructorIngredients = props => {

    return (
        <div className="constructorElement__box" >

            <div className="constructorElement__item pl-8" >
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${props.burgerItems.bun.name} (верх)`}
                    price={props.burgerItems.bun.price}
                    thumbnail={props.burgerItems.bun.image_mobile}
                />
            </div>

            <div className="constructorElement__scrollable" >
                {props.burgerItems.ingredients.map( (i) => {
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
                    text={`${props.burgerItems.bun.name} (низ)`}
                    price={props.burgerItems.bun.price}
                    thumbnail={props.burgerItems.bun.image_mobile}
                />
            </div>

        </div>
    )
}

const burgerItemsPropTypes = PropTypes.shape({
    bun: DataOblectPropTypes.isRequired,
    ingredients: PropTypes.arrayOf(DataOblectPropTypes.isRequired).isRequired
});

ConstructorIngredients.propTypes = {
    burgerItems: burgerItemsPropTypes.isRequired
}

export default ConstructorIngredients;
