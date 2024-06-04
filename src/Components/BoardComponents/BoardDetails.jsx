import React, { useEffect, useState } from "react";
import Slider from "../Slider";
import { Flex, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import List from "../ListComponents/List";
import ChangeHandler from "../ChangeHandlerComponent/ChangeHandler";
import CreateList from "../ListComponents/CreateList";
import { addListApi } from "../ApiComponent/AddApi";
import { fetchAllListInfo, fetchBoardInfo } from "../ApiComponent/fetchApi";
const BoardDetails = () => {
  const [showInput, setShowInput] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [listData, setListData] = useState([]);
  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { boardId } = useParams();

  useEffect(() => {
    fetchAllListInfo(boardId, setListData, setLoading, setError);
    fetchBoardInfo(boardId, setBoard, setLoading, setError);
  }, []);

  const handleAddList = () => {
    setShowInput(true);
  };

  const handleCancel = () => {
    setShowInput(false);
    setHelperText("");
  };

  const addListHandler = (e) => {
    e.preventDefault();
    const listElement = document.getElementById("inputListName");
    let listName = listElement.value;
    if (!listName) {
      setHelperText("Enter the list name*");
    } else {
      addListApi(listName, boardId, listData, setListData);
      setHelperText("");
      listName = "";
      setShowInput(false);
    }
  };

  const listChangeHandler = (deletedList) => {
    ChangeHandler(listData, setListData, deletedList.id);
    console.log("list change hadler is called");
  };
  return (
    <Box h={"90vh"} overflow={"hidden"}>
      {loading ? (
        <Box
          fontSize={"5rem"}
          textAlign={"center"}
          mt={"20%"}
          fontStyle={"bold"}
        >
          Loading...
        </Box>
      ) : error ? (
        <Box>No Result found...</Box>
      ) : (
        <Flex
          bg={"#0079BF"}
          style={{
            background:
              board && board.prefs && board.prefs.backgroundImage
                ? `url(${board.prefs.backgroundImage}) no-repeat center/cover`
                : "",
          }}
        >
          <Slider />
          <Flex w={"90vw"} direction={"column"}>
            <Box
              display={"flex"}
              bg={"gray.300"}
              h={"5vh"}
              alignItems={"center"}
              pl={"1rem"}
              fontSize={"1.2rem"}
              fontWeight={"bold"}
            >
              {board && board.name}
            </Box>
            <Box
              display={"flex"}
              h={"85vh"}
              overflowX={"scroll"}
              gap={"2rem"}
              p={3}
            >
              {listData.map((list) => {
                return (
                  <List
                    listName={list.name}
                    listId={list.id}
                    key={list.id}
                    onListChange={listChangeHandler}
                  />
                );
              })}
              <CreateList
                handleAddList={handleAddList}
                helperText={helperText}
                addListHandler={addListHandler}
                handleCancel={handleCancel}
                showInput={showInput}
              />
            </Box>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default BoardDetails;
