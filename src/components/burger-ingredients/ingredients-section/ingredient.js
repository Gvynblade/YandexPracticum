import React from 'react';
import { useDrag } from "react-dnd";
import styles from './ingredient.module.scss'
import PropTypes from 'prop-types';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'

const Ingredient = (props) => {

    const { _id, __v, name, image, price, handleModalOpen } = props;

    const [{isDrag}, dragRef] = useDrag({
        type: "ingredient",
        item: {_id},
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    return ( !isDrag &&
        <div className={`${styles.ingredient} mb-8`}
        onClick={() => handleModalOpen(props)}
        ref={dragRef}>
            { __v !== 0 && <div className={styles.ingredient__counter}>
                <Counter count={__v} size="default" />
            </div>}
            <img src={image} alt={name} className="pl-4 pr-4"/>
            <div className={`${styles.ingredient__price} text text_type_digits-default pt-1 pb-2`} >
                <span className="pr-1">{price}</span> <CurrencyIcon type="primary" />
            </div>
            <span className={`${styles.ingredient__title} text text_type_main-default`}>
                {name}
            </span>
        </div>
    )
}

Ingredient.propTypes = {
    "_id": PropTypes.any.isRequired,
    "name": PropTypes.string.isRequired,
    "type": PropTypes.string.isRequired,
    "proteins": PropTypes.number.isRequired,
    "fat": PropTypes.number.isRequired,
    "carbohydrates": PropTypes.number.isRequired,
    "calories": PropTypes.number.isRequired,
    "price": PropTypes.number.isRequired,
    "image": PropTypes.string.isRequired,
    "image_mobile": PropTypes.string.isRequired,
    "image_large": PropTypes.string.isRequired,
    "__v": PropTypes.number.isRequired,
    handleModalOpen: PropTypes.func.isRequired
}

export default Ingredient;
