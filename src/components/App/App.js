import React, { useState, useEffect } from 'react';
import AppHeader from './appHeader/appHeader';
import BurgerMain from '../burgerMain/burgerMain'
import Preloader from '../common/preloader'
import * as ui from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientsAPI } from '../../api/api'

function App() {

    const [state, setState] = useState([])
    const [isFetching, setIsFetching] = useState(true);

    useEffect( () => {
        IngredientsAPI.requestIngredients(setState)
    }, [])

    useEffect( () => {
            if (state.length >  0 ) {
                setIsFetching(false)
            } else {
                setIsFetching(true)
            }
    }, [state])

    return (
        <>
            <AppHeader />
            { isFetching ?
                <Preloader />
                :
                <BurgerMain data={state} />
            }
        </>
    )
}

export default App;
