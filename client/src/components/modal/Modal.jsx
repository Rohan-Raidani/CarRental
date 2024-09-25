// Modal.jsx
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './modal.css'; // Add your modal styles here

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <FaTimes style={{color:"#fbb34e"}}/>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
