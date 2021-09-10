import React from 'react';
import styles from './ingredient-details.module.scss'
import { DataOblectPropTypes } from '../../../../utils/types'

const IngredientDetails = (props) => {

    return (
        <div className={styles.ingredientBox}>

            <img src={props.data.image_large} alt={props.data.name} className={styles.ingredientImg} />

            <p className="text text_type_main-medium pt-4 pb-8">
                {props.data.name}
            </p>

            <div className={styles.ingredientInfo}>

                <div className={styles.ingredientInfo__item}>
                    <span className={styles.ingredientInfo__name}>
                        <p className="text text_type_main-default">
                            Калории,ккал
                        </p>
                    </span>
                    <span className={styles.ingredientInfo__value}>
                        <p className="text text_type_digits-default">{props.data.calories}</p>
                    </span>
                </div>

                <div className={styles.ingredientInfo__item}>
                    <span className={styles.ingredientInfo__name}>
                        <p className="text text_type_main-default">
                            Белки, г
                        </p>
                    </span>
                    <span className={styles.ingredientInfo__value}>
                        <p className="text text_type_digits-default">{props.data.proteins}</p>
                    </span>
                </div>

                <div className={styles.ingredientInfo__item}>
                    <span className={styles.ingredientInfo__name}>
                        <p className="text text_type_main-default">
                            Жиры, г
                        </p>
                    </span>
                    <span className={styles.ingredientInfo__value}>
                        <p className="text text_type_digits-default">{props.data.fat}</p>
                    </span>
                </div>

                <div className={styles.ingredientInfo__item}>
                    <span className={styles.ingredientInfo__name}>
                        <p className="text text_type_main-default">
                            Углеводы, г
                        </p>
                    </span>
                    <span className={styles.ingredientInfo__value}>
                        <p className="text text_type_digits-default">{props.data.carbohydrates}</p>
                    </span>
                </div>

            </div>

        </div>
    )}

IngredientDetails.propTypes = {
    data: DataOblectPropTypes.isRequired
}

export default IngredientDetails;
