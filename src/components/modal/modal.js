import React from 'react';
import styles from './modal.module.scss'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import ModalOverlay from './modal-overlay/modal-overlay'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import {modalToggler} from '../../utils/modal-toggler'

const modalRoot = document.getElementById('modal');

const Modal = (props) => {

    const handleStopPropagation = (e) => {
        e.stopPropagation();
    }

    const escFunction = (e) => {
        if(e.keyCode === 27) {
            modalToggler(props.isModalOpen, props.setIsModalOpen)
        }
    }

    React.useEffect( () => {
        document.addEventListener("keydown", escFunction);
        return () => {
            document.removeEventListener("keydown", escFunction)
        }
    } )


    const { children, header} = props;

    return ReactDOM.createPortal(

        ( <ModalOverlay onClose={() => modalToggler(props.isModalOpen, props.setIsModalOpen)}>

            <div className={`${styles.modal} pt-10 pr-10 pl-10 pb-15`} onClick={handleStopPropagation}>
                <div className={styles.header}>
                    {header && <p className="text text_type_main-large">{header}</p>}
                    <span className={styles.modalCloseBtn} ><CloseIcon type="primary"  onClick={() => modalToggler(props.isModalOpen, props.setIsModalOpen)} /></span>
                </div>
                {children}
            </div>

        </ModalOverlay>),
        modalRoot
    );

}

Modal.propTypes = {
    header: PropTypes.string,
    isModalOpen: PropTypes.bool.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
}

export default Modal;
