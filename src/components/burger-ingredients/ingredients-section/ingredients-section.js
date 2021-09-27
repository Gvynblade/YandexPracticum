import React from 'react'
import styles from './ingredients-section.module.scss'
import PropTypes from 'prop-types';
import { DataOblectPropTypes } from '../../../utils/types'
import Ingredient from './ingredient'

const IngredientsSection = React.forwardRef( (props, ref) => {

    const {ingredients, handleModalOpen, header} = props;

    return  (
        <div className={`${styles.section} pb-2`} ref={ref}>
            <h2 className={`${styles.section__title} text text_type_main-medium pb-6`} >{header}</h2>
            <div className={`${styles.section__flex} pl-4 pr-2`}>
                {ingredients.map( i => {
                    return ( <Ingredient {...i} handleModalOpen={handleModalOpen} key={i._id}/>)}) }
    </div>
</div>
)
})

IngredientsSection.propTypes = {
    ingredients: PropTypes.arrayOf(DataOblectPropTypes.isRequired).isRequired,
    handleModalOpen: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired
}

export default IngredientsSection;
