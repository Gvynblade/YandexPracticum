import React from 'react'
import { useSelector } from '../../services/hooks';
import Modal from '../modal/modal'

type TProps = {
    readonly ComponentPage: React.ComponentType;
    readonly ComponentModal: React.ComponentType;
    readonly modalName: string;
    readonly modalHeader?: string;
};


const ComponentSwitcher: React.FC<TProps> = ({ComponentPage, ComponentModal, modalName, modalHeader}) => {

    const { isModalOpen , modalType } = useSelector( store => store.app)

    return isModalOpen && modalType === modalName
    ? ( <Modal header ={ modalHeader ? modalHeader : undefined}>
        <ComponentModal />
        </Modal>)
        : (
            <ComponentPage />
        )

}

export default ComponentSwitcher;
