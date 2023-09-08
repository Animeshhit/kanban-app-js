import { v4 as uuidv4 } from "uuid";

function generateUniqueId() {
  return uuidv4();
}

export const getBoard = (storageData, id) => {
  return storageData.find((title) => title._id == id);
};

const getData = () => {
  const dataGotFromStorage = localStorage.getItem("kanbanboard_tasks");
  const DataAfterParsed = JSON.parse(
    dataGotFromStorage || "[]"
  ); // Provide a default value of "[]" if dataGotFromStorage is null
  return DataAfterParsed;
};

export default generateUniqueId;

export { getData };
