import React from 'react';
import Styles from './modal.module.scss'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import ModalOverlay from './modalOverlay/modalOverlay'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import {modalToggler} from '../../utils/modalToggler'

const modalRoot = document.getElementById('modal');

const Modal = (props) => {

    const handleStopPropagation = (e) => {
        e.stopPropagation();
    }

    const escFunction = (e) => {
        if(e.keyCode === 27) {
            modalToggler(props.isModal, props.setIsModal)
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

        ( <ModalOverlay onClose={() => modalToggler(props.isModal, props.setIsModal)}>

            <div className={`${Styles.modal} pt-10 pr-10 pl-10 pb-15`} onClick={handleStopPropagation}>
                <div className={Styles.header}>
                    {header && <p className="text text_type_main-large">{header}</p>}
                    <span className={Styles.modalCloseBtn} ><CloseIcon type="primary"  onClick={() => modalToggler(props.isModal, props.setIsModal)} /></span>
                </div>
                {children}
            </div>

        </ModalOverlay>),
        modalRoot
    );

}

Modal.propTypes = {
    header: PropTypes.string,
    isModal: PropTypes.bool.isRequired,
    setIsModal: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
}

export default Modal;
