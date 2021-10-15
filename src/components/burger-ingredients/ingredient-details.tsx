import React from 'react';
import styles from './ingredient-details.module.scss'
import { useSelector } from '../../services/hooks';

const IngredientDetails: React.FC = () => {

    const {modalData} = useSelector( store => store.burgerIngredients)

    return (
        <div className={styles.ingredientBox}>

            <img src={modalData!.image_large} alt={modalData!.name} className={styles.ingredientImg} />

            <p className="text text_type_main-medium pt-4 pb-8">
                {modalData!.name}
            </p>

            <div className={styles.ingredientInfo}>

                <div className={styles.ingredientInfo__item}>
                    <span className={styles.ingredientInfo__name}>
                        <p className="text text_type_main-default">
                            Калории,ккал
                        </p>
                    </span>
                    <span className={styles.ingredientInfo__value}>
                        <p className="text text_type_digits-default">{modalData!.calories}</p>
                    </span>
                </div>

                <div className={styles.ingredientInfo__item}>
                    <span className={styles.ingredientInfo__name}>
                        <p className="text text_type_main-default">
                            Белки, г
                        </p>
                    </span>
                    <span className={styles.ingredientInfo__value}>
                        <p className="text text_type_digits-default">{modalData!.proteins}</p>
                    </span>
                </div>

                <div className={styles.ingredientInfo__item}>
                    <span className={styles.ingredientInfo__name}>
                        <p className="text text_type_main-default">
                            Жиры, г
                        </p>
                    </span>
                    <span className={styles.ingredientInfo__value}>
                        <p className="text text_type_digits-default">{modalData!.fat}</p>
                    </span>
                </div>

                <div className={styles.ingredientInfo__item}>
                    <span className={styles.ingredientInfo__name}>
                        <p className="text text_type_main-default">
                            Углеводы, г
                        </p>
                    </span>
                    <span className={styles.ingredientInfo__value}>
                        <p className="text text_type_digits-default">{modalData!.carbohydrates}</p>
                    </span>
                </div>

            </div>

        </div>
    )}

export default IngredientDetails;
