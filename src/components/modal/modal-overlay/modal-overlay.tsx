import React from 'react';
import styles from './modal-overlay.module.scss'

type TProps = {
    readonly onClose: () => void
};

const ModalOverlay: React.FC<TProps> = (props) => {

    function handleModalClose(e:  React.SyntheticEvent<EventTarget> ) {
        e.stopPropagation();
        props.onClose()
    }

    return (
        <div className={styles.overlay} onClick={handleModalClose} >
            {props.children}
        </div>
    )

}

export default ModalOverlay;
