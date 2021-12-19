import React from "react";

interface props {
    modal: string;
    children: React.ReactNode;
    handleClose: () => void;
}

const ModalContainer: React.FC<props> = ({ modal, children, handleClose }) => {
    return (
        <div className={modal}>
            <button className="close-btn" onClick={handleClose}>
                Close
            </button>
            {children}
        </div>
    );
};

export default ModalContainer;
