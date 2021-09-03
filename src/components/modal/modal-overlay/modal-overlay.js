import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal-overlay.module.scss'

const ModalOverlay = (props) => {

    function handleModalClose(e) {
        e.stopPropagation();
        props.onClose()
    }

    return (
        <div className={styles.overlay} onClick={handleModalClose} >
            {props.children}
        </div>
    )

}

ModalOverlay.propTypes = {
    onClose: PropTypes.func,
}

export default ModalOverlay;
