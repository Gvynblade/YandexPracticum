import React from 'react';
import Styles from './modal.module.scss'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import ModalOverlay from './modalOverlay/modalOverlay'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const modalRoot = document.getElementById('modal');

export default class Modal extends React.Component {

    handleStopPropagation(e) {
        e.stopPropagation();
    }

    escFunction = (e) => {
        if(e.keyCode === 27) {
            this.props.onClose()
        }
    }

    componentDidMount () {
        document.addEventListener("keydown", this.escFunction)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.escFunction)
    }

    render () {
        const { children, header, onClose } = this.props;

        return ReactDOM.createPortal(

                ( <ModalOverlay onClose={onClose}>

                    <div className={`${Styles.modal} pt-10 pr-10 pl-10 pb-15`} onClick={this.handleStopPropagation}>
                        <div className={Styles.header}>
                            {header && <p className="text text_type_main-large">{header}</p>}
                            <span className={Styles.modalCloseBtn} ><CloseIcon type="primary"  onClick={onClose} /></span>
                        </div>
                        {children}
                    </div>

                    </ModalOverlay>),
                modalRoot
        );
    }
}

Modal.propTypes = {
    header: PropTypes.string,
    onClose: PropTypes.func,
    children: PropTypes.element
}
