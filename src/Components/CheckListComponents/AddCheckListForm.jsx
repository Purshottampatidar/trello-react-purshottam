import React from "react";
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
} from "@chakra-ui/react";
const AddCheckListForm = ({ addCheckListHandler }) => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button>Add checklist</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader textAlign={"center"} border={"none"}>
            Add checklist
          </PopoverHeader>
          <PopoverBody>
            <form onSubmit={addCheckListHandler}>
              <FormControl>
                <FormLabel>title*</FormLabel>
                <Input type="text" id="inputCheckListName" />
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
