import React from 'react'
import styles from './ingredients-section.module.scss'
import Ingredient from './ingredient'
import { TIngredient } from '../../../services/types/data'

type TProps = {
    ingredients: TIngredient[];
    handleModalOpen: (item:TIngredient) => void;
    header: string;
}

const IngredientsSection = React.forwardRef<HTMLDivElement, TProps>( (props, ref) => {

    const {ingredients, handleModalOpen, header} = props;

    return  (
        <div className={`${styles.section} pb-2`} ref={ref}>
            <h2 className={`${styles.section__title} text text_type_main-medium pb-6`} >{header}</h2>
            <div className={`${styles.section__flex} pl-4 pr-2`}>
                {ingredients.map( i => {
                    return ( <Ingredient data={i} handleModalOpen={handleModalOpen} key={i._id}/>)}) }
    </div>
</div>
)
})

export default IngredientsSection;
