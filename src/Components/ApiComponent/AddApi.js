const apiKey = import.meta.env.VITE_API_KEY;
const token = import.meta.env.VITE_TOKEN;
import axios from "axios";

export const addBoardApi = (inputValue, onCreateBoardData) => {
  const createBoardUrl = `https://api.trello.com/1/boards/?name=${inputValue}&key=${apiKey}&token=${token}`;
  axios
    .post(createBoardUrl)
    .then((response) => {
      console.log("New Board Created", response.data);
      onCreateBoardData(response.data);
    })
    .catch((error) => {
      console.log("Error Creating board:", error.response.data);
    });
};

export const addListApi = (listName, boardId, listData, setListData) => {
  const addListUrl = `https://api.trello.com/1/boards/${boardId}/lists?name=${listName}&key=${apiKey}&token=${token}`;
  axios
    .post(addListUrl)
    .then((response) => {
      console.log("List added to board", boardId);
      console.log(response.data);
      setListData([...listData, response.data]);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addCardApi = (cardName, listId, cardData, setCardData) => {
  const addCardUrl = `https://api.trello.com/1/cards?key=${apiKey}&token=${token}&idList=${listId}&name=${encodeURIComponent(
    cardName
  )}`;
  axios
    .post(addCardUrl)
    .then((response) => {
      console.log("card added to list", response.data);
      setCardData([...cardData, response.data]);
    })
    .catch((error) => {
      console.log("error to add card", error);
    });
};

export const addCheckListApi = (
  inputCheckList,
  cardId,
  checklistData,
  setChecklistData
) => {
  const addCheckListUrl = `https://api.trello.com/1/cards/${cardId}/checklists?name=${inputCheckList}&key=${apiKey}&token=${token}`;
  axios
    .post(addCheckListUrl)
    .then((response) => {
      console.log("checklist added", response.data);
      setChecklistData([...checklistData, response.data]);
    })
    .catch((error) => {
      console.log("failed to add checklist");
    });
};
export const addCheckItemApi = (
  inputCheckItem,
  checklistId,
  checkItemData,
  setCheckItemData
) => {
  const addItemUrl = `https://api.trello.com/1/checklists/${checklistId}/checkItems?name=${inputCheckItem}&key=${apiKey}&token=${token}`;

  axios
    .post(addItemUrl)
    .then((respone) => {
      console.log("added checkitem", respone.data);
      setCheckItemData([...checkItemData, respone.data]);
    })
    .catch((error) => {
      console.log("error to add checkitem", error);
    });
};
