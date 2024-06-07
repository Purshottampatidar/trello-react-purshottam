import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
const token = import.meta.env.VITE_TOKEN;

export const addBoardApi = (inputValue) => {
  const createBoardUrl = `https://api.trello.com/1/boards/?name=${inputValue}&key=${apiKey}&token=${token}`;
  return axios.post(createBoardUrl);
};

export const addListApi = (listName, boardId) => {
  const addListUrl = `https://api.trello.com/1/boards/${boardId}/lists?name=${listName}&key=${apiKey}&token=${token}`;
  return axios.post(addListUrl);
};

export const addCardApi = (cardName, listId) => {
  const addCardUrl = `https://api.trello.com/1/cards?key=${apiKey}&token=${token}&idList=${listId}&name=${encodeURIComponent(cardName)}`;
  return axios.post(addCardUrl);   
};

export const addCheckListApi = (inputCheckList,cardId) => {
  const addCheckListUrl = `https://api.trello.com/1/cards/${cardId}/checklists?name=${inputCheckList}&key=${apiKey}&token=${token}`;
  return axios.post(addCheckListUrl);
};
export const addCheckItemApi = (inputCheckItem,checklistId) => {
  const addItemUrl = `https://api.trello.com/1/checklists/${checklistId}/checkItems?name=${inputCheckItem}&key=${apiKey}&token=${token}`;
  return axios.post(addItemUrl);
};
