import React from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Checkbox, Flex, Text } from "@chakra-ui/react";
import { delteCheckItem } from "../ApiComponent/DeleteApi";

const CheckItem = ({
  checkItemName,
  checkItemId,
  checklistId,
  onItemDeleteChange,
  state,
  changeStateHandler,
}) => {
  const handleDelteItem = () => {
    async function fetchData() {
      try {
          const data = await delteCheckItem(checkItemId,checklistId);
          onItemDeleteChange(checkItemId);
      } catch(error) {
          console.log(error); 
      }
    }
    fetchData();
  };
  const handleCheckBoxChange = (e) => {
    const currentState = e.target.checked;
    const newState = currentState ? "complete" : "incomplete";
    changeStateHandler(newState, checkItemId);
  };
  return (
    <Flex justifyContent={"space-between"} mb={3} alignItems={"center"}>
      <Checkbox
        textDecoration={state === "complete" ? "line-through" : "none"}
        isChecked={state === "complete"}
        onChange={handleCheckBoxChange}
      >
        <Text fontSize={"0.88rem"}>{checkItemName}</Text>
      </Checkbox>
      <DeleteIcon onClick={handleDelteItem} />
    </Flex>
  );
};
export default CheckItem;
