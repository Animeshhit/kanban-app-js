import Task from "../assets/task.svg";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import generateUniqueId from "../helper";
import { createNewBoard } from "../state/action-creator";
import { NavLink } from "react-router-dom";

const AllBoards = () => {
  // Data from Storage & Setting Dispatch
  const StoredData = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // showing and hiding the add board card
  const [AddBoardCard, setAddBoardCard] = useState(false);
  const [boardValue, setBoardValue] = useState("");
  // new Board Value

  // getting the input element
  const inputRef = useRef();

  const showHideBtnCard = () => {
    setAddBoardCard(!AddBoardCard);

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  };

  const AddNewBoard = async () => {
    if (!boardValue) return;
    let newBoardData = {
      _id: generateUniqueId(),
      name: boardValue,
      cards: [],
    };
    setBoardValue("");
    try {
      dispatch(createNewBoard(newBoardData));
    } catch (err) {}
  };

  const handleInputBlur = () => {
    AddNewBoard();
    setAddBoardCard(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    AddNewBoard();
    setAddBoardCard(false);
  };

  return (
    <>
      <div className="board_list mt-6">
        <p className="text-[gray] tracking-wider px-6">
          ALL BOARDS ({StoredData.length})
        </p>
        <ul className="mt-6">
          {StoredData.map((items, index) => {
            return (
              <NavLink
                to={`/${items._id}`}
                activeClassName="active"
                className="flex mb-4 items-center w-4/5 max-w-1/2 py-3 px-6 rounded-r-full gap-2 heading-font text-white"
                key={index}
              >
                <span className="material-symbols-outlined">
                  space_dashboard
                </span>
                <span className="heading-font">{items.name}</span>
              </NavLink>
            );
          })}
          {AddBoardCard ? (
            <li className="flex mb-4 items-center w-9ty py-3 pl-6 pr-6 rounded-r-full bg-[#64CCC5] gap-2 heading-font">
              <img src={Task} alt="task" />
              <form
                onSubmit={handleFormSubmit}
                className="flex items-center justify-center"
              >
                <input
                  type="text"
                  className=" bg-transparent w-9ty border-none outline-none placeholder:text-[rgba(0,0,0,0.5)] heading-font"
                  onBlur={handleInputBlur}
                  ref={inputRef}
                  value={boardValue}
                  onChange={(e) => {
                    if (e.target.value.length < 18) {
                      setBoardValue(e.target.value);
                    }
                  }}
                  placeholder="Name In Two or Three Words..."
                />
              </form>
            </li>
          ) : (
            ""
          )}
          <button
            type="button"
            className="flex items-center w-max py-3 pl-6 pr-14 rounded-r-full text-[#64CCC5] gap-2 heading-font"
            onClick={showHideBtnCard}
          >
            <span>+</span>
            <p>Create New Board</p>
          </button>
        </ul>
      </div>
    </>
  );
};

export default AllBoards;
