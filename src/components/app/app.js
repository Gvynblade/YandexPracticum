import React, { useState, useEffect } from 'react';
import AppHeader from '../header/header';
import BurgerMain from '../burger-main/burger-main'
import Preloader from '../common/preloader'
import { ingredientsAPI } from '../../api/api'
import { IngredientsContext } from '../../context/context'

function App() {

    const [state, setState] = useState([])
    const [isFetching, setIsFetching] = useState(true);

    useEffect( () => {
        ingredientsAPI.requestIngredients(setState)
    }, [])

    useEffect( () => {
            if (state.length >  0 ) {
                setIsFetching(false)
            } else {
                setIsFetching(true)
            }
    }, [state])

    return (
        <IngredientsContext.Provider value={state} >
            <AppHeader />
            { isFetching ?
                <Preloader />
                :
                <BurgerMain />
            }
        </ IngredientsContext.Provider>
    )
}

export default App;
