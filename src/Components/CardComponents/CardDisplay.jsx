import React,{useEffect,useState} from "react";
import Card from "./Card";
import { Box, Flex, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { fetchCardsInfo } from "../ApiComponent/fetchApi";
import ChangeHandler from "../ChangeHandlerComponent/ChangeHandler";
import AddCardForm from "../CardComponents/AddCardForm";
import { addCardApi } from "../ApiComponent/AddApi";

const CardDisplay = ({
  listName,
  listId,
  deleteListHandler
}) => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
          const data = await fetchCardsInfo(listId);
          setCardData(data.data);
      } catch(error) {
          console.log(error);
      }
    }
    fetchData();
  }, []);

  const addCardHandler = (cardName) => {
      if (cardName) {
        async function fetchData() {
          try {
              const card = await addCardApi(cardName,listId);
              setCardData([...cardData,card.data]);
          } catch(error) {
              console.log(error); 
          }
        }
        fetchData();
        cardName = "";
      }
  }
  const cardChangeHandler = (deletedCardId) => {
    console.log("card changehandler is called");
    const newData = ChangeHandler(cardData, deletedCardId);
    setCardData(newData);
  };
  return (
    <Box w={"full"}>
      <Flex
        justifyContent={"space-between"}
        padding={"1rem"}
        alignItems={"center"}
      >
        <Text fontSize={"1rem"} fontWeight={"bold"}>
          {listName}
        </Text>
        <DeleteIcon cursor={"pointer"} onClick={deleteListHandler} />
      </Flex>
      <Box>
        {cardData.map((card) => (
          <Card
            cardName={card.name}
            cardId={card.id}
            key={card.id}
            shortLink={card.shortLink}
            onCardChange={cardChangeHandler}
          />
        ))}
        <AddCardForm
            addCardHandler={addCardHandler}
          />
      </Box>
    </Box>
  );
};

export default CardDisplay;
