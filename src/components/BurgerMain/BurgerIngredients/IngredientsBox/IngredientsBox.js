import React from 'react';
import PropTypes from 'prop-types';
import Styles from './IngredientsBox.module.scss'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { DataOblectPropTypes } from '../../../../utils/types.js'
import IngredientDetails from '../ingredientDetails/ingredientDetails'

const IngredientsBox = props => {

    let [isModal, setIsModal] = React.useState(false);
    let [modalData, setModalData] = React.useState(null);

    let buns = []
    let mains = []
    let sauces = []

    props.data.forEach( (i) => {
        switch (i.type) {
            case "bun":
                buns.push(i);
                break;
            case "main":
                mains.push(i);
                break;
            case "sauce":
                sauces.push(i);
                break;
            default:
                break;
        }
    })

    const handleModal = (item) => {
        setIsModal(!isModal);
        setModalData(item)
    }

    return ( <>
        <div className={`${Styles.ingredientsBox} pt-10`}>

            <div className={`${Styles.ingredientsBox__section} pb-2`}>
                <h2 className={`${Styles.ingredientsBox__title} text text_type_main-medium pb-6`} >Булки</h2>
                <div className={`${Styles.ingredientsBox__flex} pl-4 pr-2`}>
                    {buns.map( i => {
                        return (<div className={`${Styles.ingredientItem} mb-8`} key={i._id} onClick={() => handleModal(i)}>
                            { i._id === "60d3b41abdacab0026a733c7" && <div className={Styles.ingredientItem__counter}>
                                <Counter count={2} size="default" />
                            </div>}
                            <img src={i.image} alt={i.name} className="pl-4 pr-4"/>
                            <div className={`${Styles.ingredientItem__price} text text_type_digits-default pt-1 pb-2`} >
                                <span className="pr-1">{i.price}</span> <CurrencyIcon type="primary" />
                            </div>
                            <span className={`${Styles.ingredientItem__title} text text_type_main-default`}>
                                {i.name}
                            </span>
                        </div> )
                    }) }
                </div>
            </div>

            <div className={`${Styles.ingredientsBox__section} pb-2`}>
                <h2 className={`${Styles.ingredientsBox__title} text text_type_main-medium pb-6`} >Соусы</h2>
                <div className={`${Styles.ingredientsBox__flex} pl-4 pr-2`}>
                    {sauces.map( i => {
                        return (<div className={`${Styles.ingredientItem} mb-8`} key={i._id} onClick={() => handleModal(i)}>
                            { i._id === "60d3b41abdacab0026a733cf" && <div className={Styles.ingredientItem__counter}>
                                <Counter count={1} size="default" />
                            </div>}
                            <img src={i.image} alt={i.name} className="pl-4 pr-2"/>
                            <div className={`${Styles.ingredientItem__price} text text_type_digits-default pt-1 pb-2`} >
                                <span className="pr-1">{i.price}</span> <CurrencyIcon type="primary" />
                            </div>
                            <span className={`${Styles.ingredientItem__title} text text_type_main-default`}>
                                {i.name}
                            </span>
                        </div> )
                    }) }
                </div>

            </div>

            <div className={`${Styles.ingredientsBox__section} pb-2`}>
                <h2 className={`${Styles.ingredientsBox__title} text text_type_main-medium pb-6`} >Начинки</h2>
                <div className={`${Styles.ingredientsBox__flex} pl-4 pr-2`}>
                    {mains.map( i => {
                        return (<div className={`${Styles.ingredientItem} mb-8`} key={i._id} onClick={() => handleModal(i)}>
                            { i._id === "60d3b41abdacab0026a733cb" && <div className={Styles.ingredientItem__counter}>
                                <Counter count={1} size="default" />
                            </div>}
                            <img src={i.image} alt={i.name} className="pl-4 pr-4"/>
                            <div className={`${Styles.ingredientItem__price} text text_type_digits-default pt-1 pb-2`} >
                                <span className="pr-1">{i.price}</span> <CurrencyIcon type="primary" />
                            </div>
                            <span className={`${Styles.ingredientItem__title} text text_type_main-default`}>
                                {i.name}
                            </span>
                        </div> )
                    }) }
                </div>
            </div>

        </div>

        {isModal && <IngredientDetails data={modalData} isModal={isModal} setIsModal={setIsModal}/>}

    </>)
}

IngredientsBox.propTypes = {
    data: PropTypes.arrayOf(DataOblectPropTypes.isRequired).isRequired
}


export default IngredientsBox
