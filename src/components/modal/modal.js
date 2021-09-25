import React from 'react';
import styles from './modal.module.scss'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import ModalOverlay from './modal-overlay/modal-overlay'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux';
import { MODAL_CLOSE } from '../../services/actions/app'
import { ORDER_DATA_RESET } from '../../services/actions/order'
import { useHistory } from 'react-router-dom'

const modalRoot = document.getElementById('modal');

const Modal = (props) => {

    const { modalType } = useSelector( store => store.app)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleStopPropagation = (e) => {
        e.stopPropagation();
    }

    const escFunction = (e) => {
        if(e.keyCode === 27) {
            handleModalClose()
        }
    }

    React.useEffect( () => {
        document.addEventListener("keydown", escFunction);
        return () => {
            document.removeEventListener("keydown", escFunction)
        }
    } )

    const handleModalClose = () => {
        dispatch({
            type: MODAL_CLOSE,
            payload: {
                isModalOpen:false,
                modalType: null
            }
        })
        modalType === 'ingredient' && history.push('/')
        modalType === 'order' && dispatch({
            type: ORDER_DATA_RESET
        })
    }


    const { children, header} = props;

    return ReactDOM.createPortal(

        ( <ModalOverlay onClose={handleModalClose}>

            <div className={`${styles.modal} pt-10 pr-10 pl-10 pb-15`} onClick={handleStopPropagation}>
                <div className={styles.header}>
                    {header && <p className="text text_type_main-large">{header}</p>}
                    <span className={styles.modalCloseBtn} ><CloseIcon type="primary"  onClick={handleModalClose} /></span>
                </div>
                {children}
            </div>

        </ModalOverlay>),
        modalRoot
    );

}

Modal.propTypes = {
    header: PropTypes.string,
    children: PropTypes.element.isRequired
}

export default Modal;
