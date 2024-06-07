import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import CheckItem from "./CheckItem";
import CheckItemForm from "./CheckItemForm";
import ProgressBar from './ProgressBar'
import ChangeHandler from "../ChangeHandlerComponent/ChangeHandler";
import { addCheckItemApi } from "../ApiComponent/AddApi";
import { fetchCheckItemInfo } from "../ApiComponent/fetchApi";
import { updateCheckItemState } from "../ApiComponent/updateApi";
const CreateCheckItem = ({ checklistId, cardId}) => {
  const [showinput, setShowInput] = useState(false);
  const [checkItemData, setCheckItemData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
          const data = await fetchCheckItemInfo(checklistId);
          setCheckItemData(data.data);
      } catch(error) {
          console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleShowInput = () => {
    setShowInput(true);
  };

  const addCheckItem = (inputCheckItem) => {
    async function fetchData() {
      try {
          const checkItem = await addCheckItemApi(inputCheckItem,checklistId);
          setCheckItemData([...checkItemData,checkItem.data]);
          console.log('checkitem are fetch');
         
          console.log(totalItems);
          console.log(checkedItems);
      } catch(error) {
          console.log(error); 
      }
    }
    fetchData();
    setShowInput(false);
    inputCheckItem = "";
  };
  const handleDeleteItemChange = (deleteItemId) => {
    console.log("check item change handler is called");
    const newData = ChangeHandler(checkItemData, deleteItemId);
    setCheckItemData(newData);
  };

  const changeStateHandler = (newState, checkItemId) => {
    updateCheckItemState(cardId, checkItemId, newState);
    const updateeCheckItemData = checkItemData.map((item) => {
      if (item.id === checkItemId) {
        return { ...item, state: newState };
      } else {
        return item;
      }
    });
    setCheckItemData(updateeCheckItemData);
  };
  const totalItems = checkItemData.length;
  const checkedItems = checkItemData.filter(
    (item) => item.state === "complete"
  ).length;
  let percentage = Math.round(
    totalItems > 0 ? (checkedItems / totalItems) * 100 : 0
  );
  // console.log(percentage);
  return (
    <>
      <ProgressBar percentage={percentage} />
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
        addCheckItem={addCheckItem}
      />
    </>
  );
};

export default CreateCheckItem;
