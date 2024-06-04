import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CreateCheckItem from "../CheckItemComponents/CreateCheckItem";
import ProgressBar from "./ProgressBar";
import { deleteChecklistApi } from "../ApiComponent/DeleteApi";
const CheckList = ({
  checklistName,
  checklistId,
  onDeleteCheckList,
  cardId,
}) => {
  const [percentage, setPercentage] = useState(0);

  const deleteChecklist = () => {
    deleteChecklistApi(checklistId, onDeleteCheckList);
  };
  const handlePercentageChange = (newPercent) => {
    setPercentage(newPercent);
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
      <ProgressBar percentage={percentage} />
      <CreateCheckItem
        checklistId={checklistId}
        cardId={cardId}
        key={checklistId}
        onPercentageChange={handlePercentageChange}
      />
    </>
  );
};

export default CheckList;
