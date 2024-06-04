import { Box} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CheckList from './CheckList'
import ChangeHandler from "../ChangeHandlerComponent/ChangeHandler";
import AddCheckListForm from "./AddCheckListForm";
import { addCheckListApi } from "../ApiComponent/AddApi";
import { fetchCheckListInfo } from "../ApiComponent/fetchApi";

const CreateCheckList = ({cardId}) => {
  const [inputCheckList,setInputCheckList] = useState('');
  const [checklistData,setChecklistData] = useState([]);
  
  useEffect(()=>{
    fetchCheckListInfo(cardId,setChecklistData);
  },[])
  
  const handleinputCheckList=(e)=>{
      setInputCheckList(e.target.value);   
  }
  
  const addCheckListHandler=(e)=>{
    e.preventDefault();
    addCheckListApi(inputCheckList,cardId,checklistData,setChecklistData);
    setInputCheckList('');
    
  }
 
  const handleDeleteCheckList=(listId)=>{
      console.log('checklist change is called');
      ChangeHandler(checklistData,setChecklistData,listId)
  }
  
  return (
    <Box>
      <AddCheckListForm
         inputCheckList={inputCheckList}
         handleinputCheckList={handleinputCheckList}
         addCheckListHandler={addCheckListHandler}
      />
      {
         checklistData.map((checklist)=>{
            return(
              <CheckList
                 checklistName = {checklist.name}
                 checklistId = {checklist.id}
                 cardId = {checklist.idCard}
                 onDeleteCheckList={handleDeleteCheckList}
                 key={checklist.id}  
              />
            
            )
         })
      }

    </Box>
  );
};

export default CreateCheckList;
