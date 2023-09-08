import { getData } from "../../helper";

if (localStorage.getItem("kanbanboard_tasks") == null) {
  localStorage.setItem("kanbanboard_tasks", "[]");
}

const taskReducer = (state = getData(), action) => {
  switch (action.type) {
    case "CREATE_NEW_BOARD":
    case "CREATE_NEW_CARD":
    case "UPDATE_CARDS":
    case "NEW_TASK":
      return action.payload;
    default:
      return state;
  }
};

export { taskReducer };
