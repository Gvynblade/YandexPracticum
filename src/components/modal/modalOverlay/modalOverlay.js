import React from 'react';
import PropTypes from 'prop-types';
import Styles from './modalOverlay.module.scss'

const ModalOverlay = (props) => {

    function handleModalClose(e) {
        e.stopPropagation();
        props.onClose()
    }

    return (
        <div className={Styles.overlay} onClick={handleModalClose} >
            {props.children}
        </div>
    )

}

ModalOverlay.propTypes = {
    onClose: PropTypes.func,
}

export default ModalOverlay;
