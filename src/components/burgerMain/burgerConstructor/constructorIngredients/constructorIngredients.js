import React from 'react';
import PropTypes from 'prop-types';
import './constructorIngredients.scss'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { DataOblectPropTypes } from '../../../../utils/types.js'

const ConstructorIngredients = props => {

    return (
        <div className="constructorElement__box" >

            <div className="constructorElement__item pl-8" >
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${props.burgerItems.bunTop.name} (верх)`}
                    price={props.burgerItems.bunTop.price}
                    thumbnail={props.burgerItems.bunTop.image_mobile}
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
                    text={`${props.burgerItems.bunBottom.name} (низ)`}
                    price={props.burgerItems.bunBottom.price}
                    thumbnail={props.burgerItems.bunBottom.image_mobile}
                />
            </div>

        </div>
    )
}

const burgerItemsPropTypes = PropTypes.shape({
    bunTop: DataOblectPropTypes.isRequired,
    ingredients: PropTypes.arrayOf(DataOblectPropTypes.isRequired).isRequired,
    bunBottom: DataOblectPropTypes.isRequired
});

ConstructorIngredients.propTypes = {
    burgerItems: burgerItemsPropTypes.isRequired
}

export default ConstructorIngredients;
