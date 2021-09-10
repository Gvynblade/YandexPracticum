import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerMain from '../burger-main/burger-main';
import { Provider } from 'react-redux';
import store from '../../services/reducers';

function App() {
    return (
        <Provider store={store} >
            <AppHeader />
            <BurgerMain />
        </ Provider>
    )
}

export default App;
