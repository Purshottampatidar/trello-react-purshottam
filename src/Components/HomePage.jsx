import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Slider from "./Slider";
import CreateBoard from "./BoardComponents/CreateBoard";
import Board from "./BoardComponents/Board";
import { fetchAllBoardInfo } from "./ApiComponent/fetchApi";

const HomePage = () => {
  const [boardData, setBoardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
          const data = await fetchAllBoardInfo();
          setBoardData(data.data);
          setLoading(false);
      } catch(error) {
          console.log(error);
          setError(error);
      }
    }
    fetchData();
  }, []);

  const addBoardDataHandler = (singleBoardData) => {
    setBoardData([...boardData, singleBoardData]);
  };

  return (
    <>
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
        <Flex>
          <Slider />
          <Flex direction={"column"} padding={"1rem"}>
            <CreateBoard onCreateBoardData={addBoardDataHandler} />
            <Box display={"flex"} flexWrap={"wrap"} gap={"1rem"}>
              {boardData.map((board) => {
                return (
                  <Board
                    name={board.name}
                    key={board.id}
                    color={board.prefs.backgroundColor}
                    image={board.prefs.backgroundImage}
                    id={board.shortLink ? board.shortLink : board.id}
                  />
                );
              })}
            </Box>
          </Flex>
        </Flex>
      )}
    </>
  );
};
export default HomePage;
