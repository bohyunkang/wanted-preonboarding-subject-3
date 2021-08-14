import React from "react";
import ModalPortal from "Components/common/Modal/ModalPortal";

const Modal = ({ isOpen, toggleModal, modalType, children }) => {
  return (
    <>
      {isOpen && (
        <ModalPortal toggleModal={toggleModal} modalType={modalType}>
          {children}
        </ModalPortal>
      )}
    </>
  );
};

Modal.defaultProps = {
  modalType: null,
};

export default Modal;
