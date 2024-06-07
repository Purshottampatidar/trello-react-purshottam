import React, { useState } from "react";
import ModalBox from "./ModalBox";
import { Flex, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { deleteCardApi } from "../ApiComponent/DeleteApi";

const Card = (props) => {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const cardId = props.cardId;

  const deleteCardHandler = () => {
    async function fetchData() {
      try {
          const data = await deleteCardApi(cardId);
          props.onCardChange(cardId);
      } catch(error) {
          console.log(error); 
      }
    }
    fetchData();
  };

  const handleModal = () => {
    setModalIsOpen(true);
  };
  const handleClose = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        bg={"gray.200"}
        m={2}
        rounded={"lg"}
        cursor={"pointer"}
        alignItems={"center"}
      >
        <Text onClick={handleModal} p={2} w={"full"}>
          {props.cardName}
        </Text>
        <DeleteIcon cursor={"pointer"} mr={2} onClick={deleteCardHandler} />
      </Flex>
      <ModalBox
        isModalOpen={isModalOpen}
        onClose={handleClose}
        cardName={props.cardName}
        cardId={props.cardId}
        key={props.cardId}
      />
    </>
  );
};

export default Card;
