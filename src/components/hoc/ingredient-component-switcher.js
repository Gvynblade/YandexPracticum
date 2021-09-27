import React from 'react'
import { useSelector } from 'react-redux';
import Modal from '../modal/modal'
import { IngredientDetails } from '../burger-ingredients'
import { IngredientPage } from '../pages'


const IngredientComponentSwitcher = () => {

    const { isModalOpen, modalType } = useSelector( store => store.app)

    return isModalOpen && modalType === 'ingredient'
    ? ( <Modal header={'Детали ингредиента'}>
            <IngredientDetails />
        </Modal>)
    : (
            <IngredientPage />
    )

}

export default IngredientComponentSwitcher;
