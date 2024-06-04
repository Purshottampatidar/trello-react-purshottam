import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
const token = import.meta.env.VITE_TOKEN;

export const fetchAllBoardInfo = (setBoardData, setLoading, setError) => {
  const fetchBoardsUrl = `https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${token}`;
  axios
    .get(fetchBoardsUrl)
    .then((response) => {
      setBoardData(response.data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
};

export const fetchAllListInfo = (
  boardId,
  setListData,
  setLoading,
  setError
) => {
  const allListUrl = `https://api.trello.com/1/boards/${boardId}/lists?key=${apiKey}&token=${token}`;
  axios
    .get(allListUrl)
    .then((response) => {
      setListData(response.data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
};

export const fetchBoardInfo = (boardId, setBoard, setLoading, setError) => {
  const boardInfoUrl = `https://api.trello.com/1/boards/${boardId}?key=${apiKey}&token=${token}`;
  axios
    .get(boardInfoUrl)
    .then((response) => {
      setBoard(response.data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
};

export const fetchCardsInfo = (listId, setCardData) => {
  const cardInfoInaList = `https://api.trello.com/1/lists/${listId}/cards?key=${apiKey}&token=${token}`;
  axios
    .get(cardInfoInaList)
    .then((response) => {
      setCardData(response.data);
    })
    .catch((error) => {
      console.log("error in fetching card");
    });
};

export const fetchCheckListInfo = (cardId, setChecklistData) => {
  const checkListInfoUrl = `https://api.trello.com/1/cards/${cardId}/checklists?key=${apiKey}&token=${token}`;
  axios
    .get(checkListInfoUrl)
    .then((response) => {
      setChecklistData(response.data);
    })
    .catch((error) => {
      console.log("error in fetching checklist data", error);
    });
};

export const fetchCheckItemInfo = (checklistId, setCheckItemData) => {
  const checkItemsInfoUrl = `https://api.trello.com/1/checklists/${checklistId}/checkItems?key=${apiKey}&token=${token}`;
  axios
    .get(checkItemsInfoUrl)
    .then((response) => {
      setCheckItemData(response.data);
      console.log("all checkItem are fetched", response.data);
    })
    .catch((error) => {
      console.log("error on item fetch", error);
    });
};
