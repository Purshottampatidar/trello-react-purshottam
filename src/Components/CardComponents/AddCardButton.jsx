import React from "react";
import { Box, Button } from "@chakra-ui/react";

const AddCardButton = ({ setShowInput }) => {
  return (
    <Box>
      <Button
        fontSize={"0.9rem"}
        fontWeight={"400"}
        w={"15rem"}
        onClick={() => {
          setShowInput(true);
        }}
        m={1}
      >
        + Add a card
      </Button>
    </Box>
  );
};

export default AddCardButton;
