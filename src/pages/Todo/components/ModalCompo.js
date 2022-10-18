import React from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import AddTodo from "./AddTodo";

const ModalCompo = ({ setModal, modal, modalValue, setListData }) => {
  return (
    <ModalContainer>
      <Modal.Dialog>
        <Modal.Header
          closeButton
          onClick={() => {
            setModal((prev) => !prev);
          }}
        >
          <Modal.Title>수정</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddTodo
            modal={modal}
            modalValue={modalValue}
            setModal={setModal}
            setListData={setListData}
          />
        </Modal.Body>
      </Modal.Dialog>
    </ModalContainer>
  );
};

export default ModalCompo;
const ModalContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 350px;
  background-color: white;
  padding: 15px 20px;
  border-radius: 5px;
  box-shadow: 5px 5px 25px 5px gray;
  z-index: 999;
`;
