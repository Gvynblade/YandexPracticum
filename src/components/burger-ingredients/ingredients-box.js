import React from 'react';
import styles from './ingredients-box.module.scss'
import IngredientsSection from './ingredients-section/ingredients-section'
import { useSelector, useDispatch } from 'react-redux';
import Preloader from '../common/preloader'
import { SET_MODAL_DATA, SET_CURRENT_TAB } from '../../services/actions/ingredients'
import { MODAL_OPEN } from '../../services/actions/app'
import { useHistory } from 'react-router-dom'

const IngredientsBox = () => {

    const {ingredients, ingredientsRequest} = useSelector( store => store.burgerIngredients)
    const dispatch = useDispatch()
    const history = useHistory()

    const [scrollPosition, setScrollPosition] = React.useState({
        buns: null,
        sauces: null,
        mains: null
    });

    let buns = []
    let mains = []
    let sauces = []

    ingredients.forEach( (i) => {
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

    const handleModalOpen = (item) => {
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
        history.push('/ingredients/'+ item._id)
    }

    const parentRef = React.useRef();
    const bunsRef = React.useRef();
    const saucesRef = React.useRef();
    const mainsRef = React.useRef();


    const handleScroll = (element) => {

        setScrollPosition({
            buns: bunsRef.current === null ? scrollPosition.buns : bunsRef.current.offsetTop,
            sauces: saucesRef.current === null ? scrollPosition.sauces : saucesRef.current.offsetTop,
            mains: mainsRef.current === null ? scrollPosition.mains : mainsRef.current.offsetTop
        })

        const parentScroll = element.target.scrollTop

        if (parentScroll < scrollPosition.sauces) {
            dispatch({
                type: SET_CURRENT_TAB,
                payload: {
                    currentTab: "buns"
                }
            })
        }

        if (parentScroll >= scrollPosition.sauces && parentScroll < scrollPosition.mains) {
            dispatch({
                type: SET_CURRENT_TAB,
                payload: {
                    currentTab: "sauces"
                }
            })
        }

        if (parentScroll > scrollPosition.sauces && parentScroll >= scrollPosition.mains) {
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