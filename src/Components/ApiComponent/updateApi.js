import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
const token = import.meta.env.VITE_TOKEN;
export const updateCheckItemState = (cardId, checkItemId, newState) => {
  const updateCheckItemUrl = `https://api.trello.com/1/cards/${cardId}/checkItem/${checkItemId}?state=${newState}&key=${apiKey}&token=${token}`;
  axios
    .put(updateCheckItemUrl)
    .then((respone) => {
      console.log("checkItem state is changed", respone.data);
    })
    .catch((error) => {
      console.log("error to add new state of checkItem", error);
    });
};
