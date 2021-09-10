import React from 'react';
import styles from './ingredients-box.module.scss'
import Modal from '../../../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
import IngredientsSection from './ingredients-section/ingredients-section'
import { IngredientsContext } from '../../../../context/context'

const IngredientsBox = () => {

    const data = React.useContext(IngredientsContext)

    let [isModalOpen, setIsModalOpen] = React.useState(false);
    let [modalData, setModalData] = React.useState(null);

    let buns = []
    let mains = []
    let sauces = []

    data.forEach( (i) => {
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

    const handleModal = (item) => {
        setIsModalOpen(!isModalOpen);
        setModalData(item)
    }

    return ( <>
        <div className={`${styles.ingredientsBox} pt-10`} >

            <IngredientsSection ingredientsArr={buns} handleModal={handleModal} header={'Булки'}/>

            <IngredientsSection ingredientsArr={sauces} handleModal={handleModal} header={'Соусы'} />

            <IngredientsSection ingredientsArr={mains} handleModal={handleModal} header={'Начинки'} />

        </div>

        {isModalOpen &&
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} header={'Детали ингредиента'}>
                <IngredientDetails data={modalData}/>
            </Modal>}

    </>)
}


export default IngredientsBox
