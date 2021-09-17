import React from 'react';
import PropTypes from 'prop-types';
import './constructor-ingredients.scss'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { DataOblectPropTypes } from '../../../../utils/types.js'
import DraggableElement from './draggable-element'

const ConstructorIngredients = props => {

    return (
        <div className="constructorElement__box" >

            <div className="constructorElement__item pl-8" >
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${props.bun.name} (верх)`}
                    price={props.bun.price}
                    thumbnail={props.bun.image_mobile}
                />
            </div>

            <div className="constructorElement__scrollable" >
                {props.ingredients.map( (i, index) => {
                    return (<DraggableElement {...i} index={index} key={i.hash}/>)
                })}
            </div>

            <div className="constructorElement__item pl-8" >
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${props.bun.name} (низ)`}
                    price={props.bun.price}
                    thumbnail={props.bun.image_mobile}
                />
            </div>

        </div>
    )
}

ConstructorIngredients.propTypes = {
    bun: DataOblectPropTypes.isRequired,
    ingredients: PropTypes.arrayOf(DataOblectPropTypes.isRequired).isRequired
}

export default ConstructorIngredients;
