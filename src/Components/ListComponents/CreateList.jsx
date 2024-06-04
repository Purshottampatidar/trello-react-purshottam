import React from "react";
import { Box,Text,Button,Input,Flex } from "@chakra-ui/react";
const CreateList = ({handleAddList,listName,helperText,setListName,addListHandler,handleCancel,showInput}) => {
  return (
    <>
      <Box display="flex" gap={3}>
        <Box
          w="56"
          h="max"
          minW="56"
          rounded="lg"
          bg="#ffffff3d;"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          {!showInput ? (
            <Button
              onClick={handleAddList}
              rounded="lg"
              p={2}
              bg={"transparent"}
              color="white"
              fontSize="sm"
            >
              + Add another list
            </Button>
          ) : (
            <Box bg="white" rounded="lg" className="list_btn_pop">
              <Flex flexDir="column" m={2} gap={2}>
                <form onSubmit={addListHandler}>
                <Input
                  h="10"
                  p="0.5"
                  outline="blue.400"
                  type="text"
                  id={listName}
                  value={listName}
                  placeholder="Enter list title..."
                  onChange={(e) => {
                    setListName(e.target.value);
                  }}
                  required
                />
                <Text>{helperText}</Text>
                <Flex gap={2}>
                  <Button
                    type="submit"
                    rounded="md"
                    w="24"
                    bg="blue.500"
                    _hover={{ bg: "blue.600" }}
                    color="white"
                    p={2}
                  >
                    Add list
                  </Button>
                  <Button
                    onClick={handleCancel}
                    rounded="md"
                    w="10"
                    _hover={{ bg: "gray.200" }}
                    p={2}
                  >
                    X
                  </Button>
                </Flex>
                </form>
              </Flex>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default CreateList;
