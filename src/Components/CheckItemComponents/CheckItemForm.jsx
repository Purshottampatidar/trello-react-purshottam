import React, { useRef } from "react";
import { Box, Input, Button } from "@chakra-ui/react";
const CheckItemForm = ({
  showinput,
  setShowInput,
  handleShowInput,
  addCheckItem,
}) => {
  const inputCheckItemRef = useRef();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const checkItemName = inputCheckItemRef.current.value;
    addCheckItem(checkItemName);
  }
  return (
    <Box mt={3}>
      {!showinput ? (
        <Button onClick={handleShowInput}>Add an item</Button>
      ) : (
        <Box mt={2}>
          <form onSubmit={handleSubmit}>
            <Input
              mb={2}
              type="text"
              id="inputCheckItemName"
              ref={inputCheckItemRef}
              placeholder="Add an item"
            />
            <Button bg={"blue.400"} color={"white"} mr={4} type="submit">
              Add
            </Button>
            <Button bg={"white"} onClick={() => setShowInput(false)}>
              Cancel
            </Button>
          </form>
        </Box>
      )}
    </Box>
  );
};

export default CheckItemForm;
