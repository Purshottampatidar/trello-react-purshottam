import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
} from "@chakra-ui/react";
import CreateCheckList from "../CheckListComponents/CreateCheckList";
const ModalBox = ({ isModalOpen, onClose, cardName, cardId }) => {
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minH={"70vh"} maxH={"max-content"}>
          <ModalHeader>{cardName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CreateCheckList cardId={cardId} key={cardId} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalBox;
