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
    async function fetchData() {
      try {
          const data = await fetchCheckListInfo(cardId);
          setChecklistData(data.data);
      } catch(error) {
          console.log(error);
      }
    }
    fetchData();
  }, []);

  const addCheckListHandler = (inputCheckList) => {
    if (inputCheckList) {
      async function fetchData() {
        try {
            const checklist = await addCheckListApi(inputCheckList,cardId);
            setChecklistData([...checklistData,checklist.data]);
        } catch(error) {
            console.log(error); 
        }
      }
      fetchData();
    }
    inputCheckList='';
  };

  const handleDeleteCheckList = (listId) => {
    console.log("checklist change is called");
    const newData =ChangeHandler(checklistData,listId);
    setChecklistData(newData);
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
