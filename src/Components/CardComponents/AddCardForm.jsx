import React from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

const AddCardForm = ({
  addCardHandler,
  handleCancel,
  helperText,
}) => {
  return (
    <Box bg="slate.200" rounded="lg" mt={2}>
      <Flex flexDir="column" m={2} gap={2}>
        <form onSubmit={addCardHandler}>
          <Input
            h="10"
            p="0.5"
            outline="blue.400"
            type="text"
            id="inputCardName"
            placeholder="Enter card title..."
            required
          />
          <Text>{helperText}</Text>
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
              _hover={{ bg: "gray.200" }}
              p={2}
              onClick={handleCancel}
            >
              X
            </Button>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

export default AddCardForm;
