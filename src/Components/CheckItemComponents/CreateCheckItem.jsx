import { Box} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CheckItem from "./CheckItem";
import ChangeHandler from "../ChangeHandlerComponent/ChangeHandler";
import { addCheckItemApi } from "../ApiComponent/AddApi";
import { fetchCheckItemInfo } from "../ApiComponent/fetchApi";
import { updateCheckItemState } from "../ApiComponent/updateApi";
import CheckItemForm from "./CheckItemForm";
const CreateCheckItem = ({ checklistId, cardId, onPercentageChange }) => {
  const [inputCheckItem, setInputCheckItem] = useState("");
  const [showinput, setShowInput] = useState(false);
  const [checkItemData, setCheckItemData] = useState([]);

  useEffect(() => {
    fetchCheckItemInfo(checklistId,setCheckItemData);
  }, []);

  const handleShowInput = () => {
    setShowInput(true);
  };

  const addCheckItem = () => {
    addCheckItemApi(inputCheckItem,checklistId,checkItemData,setCheckItemData);
    setShowInput(false);
    setInputCheckItem("");
  };
  const handleDeleteItemChange = (deleteItemId) => {
    console.log('check item change handler is called');
    ChangeHandler(checkItemData,setCheckItemData,deleteItemId);
  };

  const changeStateHandler = (newState, checkItemId) => {
    updateCheckItemState(cardId,checkItemId,newState)
    const updateeCheckItemData = checkItemData.map((item) => {
      if (item.id === checkItemId) {
        return { ...item, state: newState };
      } else {
        return item;
      }
    });
    setCheckItemData(updateeCheckItemData);
  };

  const totalItems =checkItemData.length;
  const checkedItems = checkItemData.filter(
    (item) => item.state === "complete"
  ).length;
  let percentage = Math.round(
    totalItems > 0 ? (checkedItems / totalItems) * 100 : 0
  );
  // const percentage=100;
  onPercentageChange(percentage);

  return (
    <>
      <Box mt={3}>
        {checkItemData?.map((item) => {
          return (
            <CheckItem
              checkItemName={item.name}
              checkItemId={item.id}
              checklistId={item.idChecklist}
              onItemDeleteChange={handleDeleteItemChange}
              state={item.state}
              key={item.id}
              changeStateHandler={changeStateHandler}
            />
          );
        })}
      </Box>
      <CheckItemForm
         showinput={showinput}
         setShowInput={setShowInput}
         handleShowInput={handleShowInput}
         inputCheckItem={inputCheckItem}
         setInputCheckItem={setInputCheckItem}
         addCheckItem={addCheckItem}
      />
    </>
  );
};

export default CreateCheckItem;