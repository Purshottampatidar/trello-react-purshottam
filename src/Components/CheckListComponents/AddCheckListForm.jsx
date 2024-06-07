import React, { useRef } from "react";
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

const AddCheckListForm = ({ addCheckListHandler }) => {
  const inputCheckListRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkListName = inputCheckListRef.current.value;
    addCheckListHandler(checkListName);
    onClose();
  };
  return (
    <>
      <Popover isOpen={isOpen} onClose={onClose}>
        <PopoverTrigger>
          <Button onClick={onOpen}>Add checklist</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontSize={'bold'} border={"none"}>
            Add checklist
          </PopoverHeader>
          <PopoverBody>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>title*</FormLabel>
                <Input
                  type="text"
                  id="inputCheckListName"
                  ref={inputCheckListRef} />
                <Button bg={"blue.500"} color={"white"} mt={3} type="submit">
                  Add
                </Button>
              </FormControl>
            </form>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default AddCheckListForm;
