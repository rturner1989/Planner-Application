import React from "react";

interface props {
    children: React.ReactNode;
    handleClose: () => void;
}

const ModalContainer: React.FC<props> = ({ children, handleClose }) => {
    return (
        <div>
            <button onClick={handleClose}>Close</button>
            {children}
        </div>
    );
};

export default ModalContainer;
