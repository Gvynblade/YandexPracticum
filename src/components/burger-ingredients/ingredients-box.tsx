import React from 'react';
import styles from './ingredients-box.module.scss'
import IngredientsSection from './ingredients-section/ingredients-section'
import { useSelector, useDispatch } from '../../services/hooks';
import Preloader from '../common/preloader'
import { SET_MODAL_DATA, SET_CURRENT_TAB } from '../../services/actions/ingredients'
import { MODAL_OPEN } from '../../services/actions/app'
import { useHistory } from 'react-router-dom'
import { TIngredient } from '../../services/types/data'

const IngredientsBox: React.FC = () => {

    const {ingredients, ingredientsRequest} = useSelector( store => store.burgerIngredients)
    const dispatch = useDispatch()
    const history = useHistory()

    const [scrollPosition, setScrollPosition] = React.useState<{buns: number | null, sauces: number | null, mains: number | null}>({
        buns: null,
        sauces: null,
        mains: null
    });

    let buns: TIngredient[] = []
    let mains: TIngredient[] = []
    let sauces: TIngredient[] = []

    ingredients.forEach( (i: TIngredient) => {
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

    const handleModalOpen = (item: TIngredient) => {
        dispatch({
            type: MODAL_OPEN,
            payload: {
                isModalOpen: true,
                modalType: 'ingredient'
            }
        })
        dispatch({
            type: SET_MODAL_DATA,
            payload: {
                modalData: item
            }
        })
        history.push('/ingredients/' + item._id)
    }

    const parentRef = React.useRef<HTMLDivElement>(null);
    const bunsRef = React.useRef<HTMLDivElement>(null);
    const saucesRef = React.useRef<HTMLDivElement>(null);
    const mainsRef = React.useRef<HTMLDivElement>(null);


    const handleScroll = (element: React.SyntheticEvent<EventTarget>) => {

        setScrollPosition({
            buns: bunsRef.current === null ? scrollPosition.buns : bunsRef.current!.offsetTop,
            sauces: saucesRef.current === null ? scrollPosition.sauces : saucesRef.current!.offsetTop,
            mains: mainsRef.current === null ? scrollPosition.mains : mainsRef.current!.offsetTop
        })

        const target = element.target as Element;

        const parentScroll = target.scrollTop

        if (parentScroll < scrollPosition.sauces!) {
            dispatch({
                type: SET_CURRENT_TAB,
                payload: {
                    currentTab: "buns"
                }
            })
        }

        if (parentScroll >= scrollPosition.sauces! && parentScroll < scrollPosition.mains!) {
            dispatch({
                type: SET_CURRENT_TAB,
                payload: {
                    currentTab: "sauces"
                }
            })
        }

        if (parentScroll > scrollPosition.sauces! && parentScroll >= scrollPosition.mains!) {
            dispatch({
                type: SET_CURRENT_TAB,
                payload: {
                    currentTab: "mains"
                }
            })
        }
    }

    return ( <div className={`${styles.ingredientsBox} pt-10`} ref={parentRef} onScroll={ e => handleScroll(e)}>

        {ingredientsRequest ?
            <Preloader />
            :
            [
                <IngredientsSection ingredients={buns}
                    handleModalOpen={handleModalOpen}
                    header={'Булки'}
                    key={'Булки'}
                    ref={bunsRef}/>,

                <IngredientsSection
                    ingredients={sauces}
                    handleModalOpen={handleModalOpen}
                    header={'Соусы'}
                    key={'Соусы'}
                    ref={saucesRef}/>,

                <IngredientsSection
                    ingredients={mains}
                    handleModalOpen={handleModalOpen}
                    header={'Начинки'}
                    key={'Начинки'}
                    ref={mainsRef}/>
            ]
        }

    </div>
    )
}


export default IngredientsBox
