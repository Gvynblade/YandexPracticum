import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import './App.css';
import * as ui from '@ya.praktikum/react-developer-burger-ui-components';

function App() {
  return (
    <>
      <AppHeader />
      <BurgerMain />
    </>
  );
}

const BurgerMain = () => {
    return(
        <main className="BurgerMain container pl-5 pr-5">
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
    )
}

export default App;
