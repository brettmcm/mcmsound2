import { React, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from '../styles/Home.module.css'

const Modal = ({ onClose, children, title }) => {
    
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const handleEsc = (e) => {
        if (e.keyCode === 27) {
            onClose();
        }
    };

    const modalContent = (
        <div className={styles.modalOverlay}>
            {children}
            {title}
            <a href="#" className={styles.modalClose} onClick={handleCloseClick}>
                Close
            </a>
        </div>
    );

    if(typeof document !== 'undefined') {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    }
};

export default Modal