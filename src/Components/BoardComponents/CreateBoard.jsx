import React, { useRef, useState } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { addBoardApi } from "../ApiComponent/AddApi";
const CreateBoard = ({ onCreateBoardData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [displayInput, setDisplayInput] = useState(false);
  const [helperText, setHelperText] = useState("");
  const inputRef = useRef(null)

  const addBoardHandler = (e) => {
    e.preventDefault();
    
    let inputValue = inputRef.current.value;
    if (!inputValue) {
      setDisplayInput(true);
      setHelperText("please enter a name of your board");
    } else {
      async function fetchData() {
        try {
            const board = await addBoardApi(inputValue);
            onCreateBoardData(board.data);
        } catch(error) {
            console.log(error); 
        }
      }
      fetchData();
      setHelperText("");
      setDisplayInput(false);
      inputValue = "";
      onClose(close);
    }
  };
  return (
    <>
      <Box
        style={{
          display: "flex",
          width: "250px",
          height: "150px",
          backgroundColor: "#f1f1f1",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          borderRadius: "1rem",
          marginTop: "1rem",
        }}
        onClick={onOpen}
      >
        Create new Board
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={addBoardHandler}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Board</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontSize={"1rem"} fontWeight={"semibold"}>
                Board title<span className="text-red-800">*</span>
              </Text>
              <Input
                id="inputBoardName"
                placeholder="Enter your board name"
                ref={inputRef}
              ></Input>
              <Box display={`${displayInput ? "flex" : "node"}`}>
                {helperText}
              </Box>
            </ModalBody>
            <ModalFooter
              display={"flex"}
              justifyContent={"flex-start"}
              gap={"2rem"}
            >
              <Button type="submit" colorScheme="blue">
                Create Board
              </Button>
              <Button colorScheme="white"  _hover={{ bg: "gray.200" }} color={"black"} mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};
export default CreateBoard;
