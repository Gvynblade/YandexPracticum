import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import './App.css';
import * as ui from '@ya.praktikum/react-developer-burger-ui-components';
import state from './utils/data'

function App() {
  return (
    <>
      <AppHeader />
      <BurgerMain />
    </>
      dfgdfgdfgcd
  );
}

const BurgerMain = () => {
    return(
        <main className="BurgerMain container pl-5 pr-5">
            <BurgerIngredients data={state} />
            <BurgerConstructor data={state} />
        </main>
    )
}

export default App;
