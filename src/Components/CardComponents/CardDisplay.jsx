import React from "react";
import Card from "./Card";
import { Box, Flex, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const CardDisplay = ({
  cardData,
  listName,
  deleteListHandler,
  cardChangeHandler,
}) => {
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
      </Box>
    </Box>
  );
};

export default CardDisplay;
