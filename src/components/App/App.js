import React from 'react';
import AppHeader from './AppHeader/AppHeader';
import BurgerMain from '../BurgerMain/BurgerMain'
import * as ui from '@ya.praktikum/react-developer-burger-ui-components';
import state from '../../utils/data'

function App() {

    return (
        <>
            <AppHeader />
            <BurgerMain data={state} />
        </>
    )
}

export default App;
