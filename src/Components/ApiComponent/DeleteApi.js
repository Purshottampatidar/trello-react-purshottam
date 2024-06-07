import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
const token = import.meta.env.VITE_TOKEN;

export const deleteListApi = (listId) => {
  const deleteListUrl = `https://api.trello.com/1/lists/${listId}/closed?key=${apiKey}&token=${token}&value=true`;
  return axios.put(deleteListUrl);
};

export const deleteCardApi = (cardId) => {
  const delCardUrl = `https://api.trello.com/1/cards/${cardId}?key=${apiKey}&token=${token}`;
  return axios.delete(delCardUrl)   
};

export const deleteChecklistApi = (checklistId) => {
  const deleteChecklistUrl = `https://api.trello.com/1/checklists/${checklistId}?key=${apiKey}&token=${token}`;
  return axios.delete(deleteChecklistUrl);
};

export const delteCheckItem = (checkItemId,checklistId) => {
  const deleteItemUrl = `https://api.trello.com/1/checklists/${checklistId}/checkItems/${checkItemId}?key=${apiKey}&token=${token}`;
  return axios.delete(deleteItemUrl)
};
