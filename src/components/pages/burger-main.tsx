import React from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from './burger-main.module.scss'
import { BurgerIngredients } from '../burger-ingredients';
import { BurgerConstructor } from '../burger-constructor';

const BurgerMain: React.FC = () => {

    return(
        <main className={`${styles.BurgerMain} container pl-5 pr-5`}>
            <DndProvider backend={HTML5Backend} >
                <BurgerIngredients />
                <BurgerConstructor />
            </ DndProvider >
        </main>
    )
}

export default BurgerMain;
