import { combineReducers } from "redux";
import { taskReducer } from "./Task";
import PopupReducer from "./Popup";

const reducers = combineReducers({
  tasks: taskReducer,
  popup: PopupReducer,
});

export default reducers;
