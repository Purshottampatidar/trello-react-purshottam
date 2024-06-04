import React from "react";
import { Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <Box minW={"10vw"} h={"100vh"} bg={"gray.400"}>
    <Link to='/boards'>
      <Button w={"full"}  h={'5vh'}>
        Boards
      </Button>
    </Link>
    </Box>
  );
};
export default Slider;
