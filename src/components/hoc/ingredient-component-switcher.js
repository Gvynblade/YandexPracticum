import React from 'react'
import { useSelector } from 'react-redux';
import Modal from '../modal/modal'
import { IngredientDetails } from '../burger-ingredients'
import { IngredientPage } from '../pages'
import { Route } from 'react-router-dom'
import ProtectedRoute from './protected-route'


const IngredientComponentSwitcher = () => {

    const { isModalOpen, modalType } = useSelector( store => store.app)

    return isModalOpen && modalType === 'ingredient'
    ? ( <Route exact path={'/ingredients/:id'}>
        <Modal header={'Детали ингредиента'}>
            <IngredientDetails />
        </Modal>
    </Route>)
    : (
        <ProtectedRoute exact={true} path={'/ingredients/:id'}>
            <IngredientPage />
        </ProtectedRoute>
    )

}

export default IngredientComponentSwitcher;
