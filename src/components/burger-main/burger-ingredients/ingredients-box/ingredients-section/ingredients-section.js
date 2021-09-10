import React from 'react'
import styles from './ingredients-section.module.scss'
import PropTypes from 'prop-types';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { DataOblectPropTypes } from '../../../../../utils/types'

const IngredientsSection = ({ingredientsArr, handleModal, header}) => {
    return  (
        <div className={`${styles.section} pb-2`}>
            <h2 className={`${styles.section__title} text text_type_main-medium pb-6`} >{header}</h2>
            <div className={`${styles.section__flex} pl-4 pr-2`}>
                {ingredientsArr.map( i => {
                    return (<div className={`${styles.ingredient} mb-8`} key={i._id} onClick={() => handleModal(i)}>
                    { i._id === "60d3b41abdacab0026a733c7" && <div className={styles.ingredient__counter}>
                    <Counter count={2} size="default" />
                </div>}
                <img src={i.image} alt={i.name} className="pl-4 pr-4"/>
                <div className={`${styles.ingredient__price} text text_type_digits-default pt-1 pb-2`} >
                    <span className="pr-1">{i.price}</span> <CurrencyIcon type="primary" />
                </div>
                <span className={`${styles.ingredient__title} text text_type_main-default`}>
                    {i.name}
                </span>
            </div>
        )}) }
    </div>
</div>
)
}

IngredientsSection.propTypes = {
    ingredientsArr: PropTypes.arrayOf(DataOblectPropTypes.isRequired).isRequired,
    handleModal: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired
}

export default IngredientsSection;
