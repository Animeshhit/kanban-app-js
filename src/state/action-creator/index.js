import store from "../store";
import { getBoard } from "../../helper";

//getting data from storage
const getStoredData = () => {
  let storedData = localStorage.getItem("kanbanboard_tasks");
  if (!storedData) return [];
  try {
    return JSON.parse(storedData);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return [];
  }
};

//creating new Board
export const createNewBoard = (board) => {
  const storedData = getStoredData();
  storedData.push(board);
  localStorage.setItem("kanbanboard_tasks", JSON.stringify(storedData));
  store.dispatch({
    type: "CREATE_NEW_BOARD",
    payload: storedData,
  });
};

// creating new card
export const createNewCards = (id, newCard) => {
  const storedData = getStoredData();
  const currentBoard = getBoard(storedData, id);
  currentBoard.cards.push(newCard);
  localStorage.setItem("kanbanboard_tasks", JSON.stringify(storedData));
  store.dispatch({
    type: "CREATE_NEW_CARD",
    payload: storedData,
  });
};

//changing the name
export const changeName = (Name, boardId, cardId) => {
  const storedData = getStoredData();
  const currentBoard = getBoard(storedData, boardId);
  const currentCard = getBoard(currentBoard.cards, cardId);
  currentCard.cardHeader = Name;
  localStorage.setItem("kanbanboard_tasks", JSON.stringify(storedData));
  store.dispatch({
    type: "UPDATE_CARDS",
    payload: storedData,
  });
};

export const openPopup = () => {
  store.dispatch({
    type: "OPEN",
  });
};

export const closePopup = () => {
  store.dispatch({
    type: "CLOSE",
  });
};

export const newTask = (Task, BoardId, CardId) => {
  console.log(Task);
  const storedData = getStoredData();
  const currentBoard = getBoard(storedData, BoardId);
  const currentCard = getBoard(currentBoard.cards, CardId);
  currentCard.totalTaskes = currentCard.tasks.length + 1;
  currentCard.tasks.push(Task);
  console.log(storedData);
  localStorage.setItem("kanbanboard_tasks", JSON.stringify(storedData));
  store.dispatch({
    type: "NEW_TASK",
    payload: storedData,
  });
};
