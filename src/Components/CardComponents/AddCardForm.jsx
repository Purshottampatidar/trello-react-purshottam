import React, { useRef,useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

const AddCardForm = ({ addCardHandler}) => {
  const [showInput, setShowInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCardHandler(inputCardRef.current.value);
    setShowInput(false);
  };
  const inputCardRef = useRef(null);
  return (
    <>
    {!showInput ? (
      <Box>
      <Button
        fontSize={"0.9rem"}
        fontWeight={"400"}
        w={"15rem"}
        m={1}
        onClick={() => {
          setShowInput(true);
        }}
      >
        + Add a card
      </Button>
    </Box>
    ) : (

    <Box bg="slate.200" rounded="lg" mt={2}>
      <Flex flexDir="column" m={2} gap={2}>
        <form onSubmit={handleSubmit}>
          <Input
            h="10"
            p="0.5"
            outline="blue.400"
            type="text"
            id="inputCardName"
            placeholder="Enter card title..."
            ref={inputCardRef}
            required
          />
          <Flex gap={2} mt={2}>
            <Button
              rounded="md"
              w="24"
              bg="blue.500"
              _hover={{ bg: "blue.600" }}
              color="white"
              p={2}
              type="submit"
            >
              Add card
            </Button>
            <Button
              rounded="md"
              w="10"
              bg={"white"}
              _hover={{ bg: "gray.200" }}
              p={2}
              onClick={()=>setShowInput(false)}
            >
              X
            </Button>
          </Flex>
        </form>
      </Flex>
    </Box>
    )}
    </>
  );
};

export default AddCardForm;
