import React from "react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import CreateCheckItem from "../CheckItemComponents/CreateCheckItem";
import { deleteChecklistApi } from "../ApiComponent/DeleteApi";
const CheckList = ({
  checklistName,
  checklistId,
  onDeleteCheckList,
  cardId,
}) => {

  const deleteChecklist = () => {
    async function fetchData() {
      try {
          const data = await deleteChecklistApi(checklistId);
          onDeleteCheckList(checklistId);
      } catch(error) {
          console.log(error); 
      }
    }
    fetchData();
  };
  
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} mt={10}>
        <Text fontWeight={"bold"}>
          <CheckIcon border={"1px solid black"} mr={1} />
          {checklistName}
        </Text>
        <DeleteIcon cursor={"pointer"} onClick={deleteChecklist} />
      </Box>
      <CreateCheckItem
        checklistId={checklistId}
        cardId={cardId}
        key={checklistId}
      />
    </>
  );
};

export default CheckList;
