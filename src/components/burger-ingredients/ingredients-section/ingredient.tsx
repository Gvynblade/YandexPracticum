import React from 'react';
import { useDrag } from "react-dnd";
import styles from './ingredient.module.scss'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { TIngredient } from '../../../services/types/data'

type TProps = {
    data: TIngredient;
    handleModalOpen: (item:TIngredient) => void;
}

const Ingredient: React.FC<TProps> = ({data, handleModalOpen}) => {

    const [{isDrag}, dragRef] = useDrag({
        type: "ingredient",
        item: {_id: data._id},
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    return ( <>
        {!isDrag && (
            <div className={`${styles.ingredient} mb-8`}
            onClick={() => handleModalOpen(data)} ref={dragRef}>
            { data.__v !== 0 && <div className={styles.ingredient__counter}>
            <Counter count={data.__v} size="default" />
            </div>}
            <img src={data.image} alt={data.name} className="pl-4 pr-4"/>
            <div className={`${styles.ingredient__price} text text_type_digits-default pt-1 pb-2`} >
            <span className="pr-1">{data.price}</span> <CurrencyIcon type="primary" />
            </div>
            <span className={`${styles.ingredient__title} text text_type_main-default`}>
            {data.name}
            </span>
            </div>
        )}
        </>
    )
}

export default Ingredient;
