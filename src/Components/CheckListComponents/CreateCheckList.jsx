import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import CheckList from "./CheckList";
import ChangeHandler from "../ChangeHandlerComponent/ChangeHandler";
import AddCheckListForm from "./AddCheckListForm";
import { addCheckListApi } from "../ApiComponent/AddApi";
import { fetchCheckListInfo } from "../ApiComponent/fetchApi";

const CreateCheckList = ({ cardId }) => {
  const [checklistData, setChecklistData] = useState([]);

  useEffect(() => {
    fetchCheckListInfo(cardId, setChecklistData);
  }, []);

  const addCheckListHandler = () => {
    const checkListElement = document.getElementById("inputCheckListName");
    let inputCheckList = checkListElement.value;
    if (inputCheckList) {
      addCheckListApi(inputCheckList, cardId, checklistData, setChecklistData);
    }
    checkListElement.value = '';
  };

  const handleDeleteCheckList = (listId) => {
    console.log("checklist change is called");
    ChangeHandler(checklistData, setChecklistData, listId);
  };

  return (
    <Box>
      <AddCheckListForm
       addCheckListHandler={addCheckListHandler}
      />
      {checklistData.map((checklist) => {
        return (
          <CheckList
            checklistName={checklist.name}
            checklistId={checklist.id}
            cardId={checklist.idCard}
            onDeleteCheckList={handleDeleteCheckList}
            key={checklist.id}
          />
        );
      })}
    </Box>
  );
};

export default CreateCheckList;
