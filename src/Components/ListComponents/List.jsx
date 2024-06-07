import React from "react";
import { Box, Flex} from "@chakra-ui/react";
import CardDisplay from "../CardComponents/CardDisplay";
import ChangeHandler from "../ChangeHandlerComponent/ChangeHandler";
import { deleteListApi } from "../ApiComponent/DeleteApi";

const List = (props) => {
  const listId = props.listId;

  const deleteListHandler = () => {
    async function fetchData() {
      try {
          const data = await deleteListApi(listId);
          listChangeHandler(listId);
      } catch(error) {
          console.log(error); 
      }
    }
    fetchData();
  };
  const listChangeHandler = (deletedList) => {
    const newData = ChangeHandler(props.listData,deletedList);
    props.setListData(newData);
    console.log("list change hadler is called");
  };
  return (
    <Flex>
      <Box w={"250px"} h={"max-content"} bg={"white"} rounded="lg">
        <CardDisplay
          listName={props.listName}
          listId={listId}
          deleteListHandler={deleteListHandler}
        />
      </Box>
    </Flex>
  );
};

export default List;
