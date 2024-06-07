import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import Slider from "../Slider";
import List from "../ListComponents/List";
import CreateList from "../ListComponents/CreateList";
import { addListApi } from "../ApiComponent/AddApi";
import { fetchAllListInfo, fetchBoardInfo } from "../ApiComponent/fetchApi";
const BoardDetails = () => {
  const [listData, setListData] = useState([]);
  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { boardId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
          const listDatas = await fetchAllListInfo(boardId);
          const boardData = await fetchBoardInfo(boardId);
          setListData(listDatas.data);
          setBoard(boardData.data);
          setLoading(false);
      } catch(error) {
          console.log(error);
          setError(error);
      }
    }
    fetchData();

  }, []);
  const addListHandler = (listName) => {
    if (listName) {
      async function fetchData() {
        try {
            const list = await addListApi(listName,boardId);
            setListData([...listData,list.data]);
        } catch(error) {
            console.log(error); 
        }
      }
      fetchData();
      listName='';
    }
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
                    setListData={setListData}
                    listData={listData}
                  />
                );
              })}
              <CreateList
                addListHandler={addListHandler}
              />
            </Box>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default BoardDetails;
