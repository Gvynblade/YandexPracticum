import React from 'react'
import { useSelector } from 'react-redux';
import Modal from '../modal/modal'


const ComponentSwitcher = ({ComponentPage, ComponentModal, modalName, modalHeader}) => {

    const { isModalOpen, modalType } = useSelector( store => store.app)

    return isModalOpen && modalType === modalName
    ? ( <Modal header={ modalHeader ? modalHeader : undefined}>
            <ComponentModal />
        </Modal>)
    : (
        <ComponentPage />
    )

}

export default ComponentSwitcher;
