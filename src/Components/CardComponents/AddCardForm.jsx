// AddCardForm.js
import React from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

const AddCardForm = ({id, cardName, setCardName, addCardHandler, handleCancel, helperText }) => {
  return (
    <Box bg="slate.200" rounded="lg">
      <Flex flexDir="column" m={2} gap={2}>
        <Input
          h="10"
          p="0.5"
          outline="blue.400"
          type="text"
          id={id}
          value={cardName}
          placeholder="Enter card title..."
          onChange={(e) => {
            setCardName(e.target.value);
          }}
          required
        />
        <Text>{helperText}</Text>
        <Flex gap={2}>
          <Button
            rounded="md"
            w="24"
            bg="blue.500"
            _hover={{ bg: "blue.600" }}
            color="white"
            p={2}
            onClick={addCardHandler}
          >
            Add card
          </Button>
          <Button
            rounded="md"
            w="10"
            _hover={{ bg: "gray.200" }}
            p={2}
            onClick={handleCancel}
          >
            X
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AddCardForm;
