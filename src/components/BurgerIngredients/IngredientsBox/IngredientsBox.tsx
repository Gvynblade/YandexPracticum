import React, { FunctionComponent } from 'react';
import Styles from './IngredientsBox.module.scss'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'

const IngredientsBox: FunctionComponent<any> = props => {

    let buns:any[] = []
    let mains:any[] = []
    let sauces:any[] = []

    props.data.forEach( (i:any) => {
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

    return (<div className={`${Styles.ingredientsBox} pt-10`}>

            <div className={`${Styles.ingredientsBox__section} pb-2`}>
                <h2 className={`${Styles.ingredientsBox__title} text text_type_main-medium pb-6`} >Булки</h2>
                <div className={`${Styles.ingredientsBox__flex} pl-4 pr-4`}>
                    {buns.map( i => {
                        return (<div className={`${Styles.ingredientItem} mb-8`} key={i._id}>
                            { i._id === "60666c42cc7b410027a1a9b1" && <div className={Styles.ingredientItem__counter}>
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

            <div className={`${Styles.ingredientsBox__section} pb-2`}>
                <h2 className={`${Styles.ingredientsBox__title} text text_type_main-medium pb-6`} >Соусы</h2>
                <div className={`${Styles.ingredientsBox__flex} pl-4 pr-4`}>
                    {sauces.map( i => {
                        return (<div className={`${Styles.ingredientItem} mb-8`} key={i._id}>
                            { i._id === "60666c42cc7b410027a1a9b9" && <div className={Styles.ingredientItem__counter}>
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

            <div className={`${Styles.ingredientsBox__section} pb-2`}>
                <h2 className={`${Styles.ingredientsBox__title} text text_type_main-medium pb-6`} >Начинки</h2>
                <div className={`${Styles.ingredientsBox__flex} pl-4 pr-4`}>
                    {mains.map( i => {
                        return (<div className={`${Styles.ingredientItem} mb-8`} key={i._id}>
                            { i._id === "60666c42cc7b410027a1a9b4" && <div className={Styles.ingredientItem__counter}>
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

        </div>)
}


export default IngredientsBox
