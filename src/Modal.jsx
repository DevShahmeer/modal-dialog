import React from 'react';
import { useModal } from './ModalContext';

const Modal = ({ children }) => {
  const { isModalOpen, closeModal } = useModal();

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={closeModal}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
