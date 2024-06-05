import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import CardDisplay from "../CardComponents/CardDisplay";
import AddCardForm from "../CardComponents/AddCardForm";
import AddCardButton from "../CardComponents/AddCardButton";
import ChangeHandler from "../ChangeHandlerComponent/ChangeHandler";
import { addCardApi } from "../ApiComponent/AddApi";
import { deleteListApi } from "../ApiComponent/DeleteApi";
import { fetchCardsInfo } from "../ApiComponent/fetchApi";

const List = (props) => {
  const [showInput, setShowInput] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [helperText, setHelperText] = useState(false);

  const listId = props.listId;

  useEffect(() => {
    fetchCardsInfo(listId, setCardData);
  }, []);
  const handleCancel = () => {
    setShowInput(false);
    setHelperText("");
  };

  const addCardHandler = (e) => {
    e.preventDefault();
    const cardElement = document.getElementById("inputCardName");
    let cardName = cardElement.value;
    if (!cardName) {
      setHelperText("Enter card name*");
    } else {
      addCardApi(cardName, listId, cardData, setCardData);
      setShowInput(false);
      cardName = "";
      setHelperText("");
    }
  };

  const deleteListHandler = () => {
    deleteListApi(listId, props.onListChange);
  };

  const cardChangeHandler = (deletedCardId) => {
    console.log("card changehandler is called");
    ChangeHandler(cardData, setCardData, deletedCardId);
  };
  return (
    <Flex>
      <Box w={"250px"} h={"max-content"} bg={"white"} rounded="lg">
        <CardDisplay
          cardData={cardData}
          listName={props.listName}
          deleteListHandler={deleteListHandler}
          cardChangeHandler={cardChangeHandler}
        />
        {!showInput ? (
          <AddCardButton setShowInput={setShowInput} />
        ) : (
          <AddCardForm
            addCardHandler={addCardHandler}
            handleCancel={handleCancel}
            helperText={helperText}
          />
        )}
      </Box>
    </Flex>
  );
};

export default List;
