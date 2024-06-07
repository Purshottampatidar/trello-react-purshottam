import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
const token = import.meta.env.VITE_TOKEN;

export const fetchAllBoardInfo = () => {
  const fetchBoardsUrl = `https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${token}`;
  return axios.get(fetchBoardsUrl);
};

export const fetchAllListInfo = (boardId) => {
  const allListUrl = `https://api.trello.com/1/boards/${boardId}/lists?key=${apiKey}&token=${token}`;
  return axios.get(allListUrl)
};

export const fetchBoardInfo = (boardId) => {
  const boardInfoUrl = `https://api.trello.com/1/boards/${boardId}?key=${apiKey}&token=${token}`;
  return axios.get(boardInfoUrl);
};

export const fetchCardsInfo = (listId) => {
  const cardInfoInaList = `https://api.trello.com/1/lists/${listId}/cards?key=${apiKey}&token=${token}`;
  return axios.get(cardInfoInaList); 
};

export const fetchCheckListInfo = (cardId) => {
  const checkListInfoUrl = `https://api.trello.com/1/cards/${cardId}/checklists?key=${apiKey}&token=${token}`;
  return axios.get(checkListInfoUrl);
};

export const fetchCheckItemInfo = (checklistId) => {
  const checkItemsInfoUrl = `https://api.trello.com/1/checklists/${checklistId}/checkItems?key=${apiKey}&token=${token}`;
  return axios.get(checkItemsInfoUrl);

};
