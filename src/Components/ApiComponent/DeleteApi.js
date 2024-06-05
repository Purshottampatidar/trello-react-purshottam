import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
const token = import.meta.env.VITE_TOKEN;

export const deleteListApi = (listId, onListChange) => {
  const deleteListUrl = `https://api.trello.com/1/lists/${listId}/closed?key=${apiKey}&token=${token}&value=true`;
  axios
    .put(deleteListUrl)
    .then((response) => {
      console.log("list delete successfully", response.data);
      onListChange(response.data);
    })
    .catch((error) => {
      console.log("error in deleting list");
    });
};

export const deleteCardApi = (cardId, onCardChange) => {
  const delCardUrl = `https://api.trello.com/1/cards/${cardId}?key=${apiKey}&token=${token}`;
  axios
    .delete(delCardUrl)
    .then((response) => {
      console.log("card deleted successfuly", response.data);
      onCardChange(cardId);
    })
    .catch((error) => {
      console.log("error in card delete", error);
    });
};

export const deleteChecklistApi = (checklistId, onDeleteCheckList) => {
  const deleteChecklistUrl = `https://api.trello.com/1/checklists/${checklistId}?key=${apiKey}&token=${token}`;
  // console.log('checklist delete is clicked',checklistName,checklistId);
  axios
    .delete(deleteChecklistUrl)
    .then((response) => {
      console.log("checklist deleted", response.data);
      onDeleteCheckList(checklistId);
    })
    .catch((error) => {
      console.log("erro to delete checklist", error);
    });
};

export const delteCheckItem = (
  checkItemId,
  checklistId,
  onItemDeleteChange
) => {
  const deleteItemUrl = `https://api.trello.com/1/checklists/${checklistId}/checkItems/${checkItemId}?key=${apiKey}&token=${token}`;
  axios
    .delete(deleteItemUrl)
    .then((respones) => {
      console.log("checkItem deleted", respones.data);
      onItemDeleteChange(checkItemId);
    })
    .catch((error) => {
      console.log("error to delete item", error);
    });
};
