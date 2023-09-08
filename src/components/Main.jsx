import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createNewCards, changeName } from "../state/action-creator";
import { getBoard } from "../helper";
import generateUniqueId from "../helper";
import Popup from "./Popup";
import Card from "./Card";
import CreateColumn from "./CreateColumn";

const Main = () => {
  const storagedDAta = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [currentBoard, setCurrentBoard] = useState({});
  const [currentBoardCards, setCurrentBoardCards] = useState([]);
  const [isDisable, setIsDisable] = useState(false);
  const [Name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const createNewColumn = () => {
    let newCard = {
      _id: generateUniqueId(),
      cardHeader: "Enter a New Name",
      totalTaskes: 0,
      tasks: [],
    };
    dispatch(createNewCards(id, newCard));
  };

  const changeNameData = (cardId) => {
    if (Name === "") return;
    dispatch(changeName(Name, id, cardId));
    setIsDisable(true);
  };

  useEffect(() => {
    setCurrentBoard(getBoard(storagedDAta, id));
    setCurrentBoardCards(getBoard(storagedDAta, id).cards);
  }, [id, createNewColumn]);

  useEffect(() => {
    currentBoardCards.forEach((item) => {
      if (item.cardHeader === "Enter a New Name") {
        setName("");
      } else {
        setName(item.cardHeader);
      }
    });
  }, [currentBoardCards]);

  return (
    <>
      <Popup currentData={currentBoardCards} />
      <div className="flex mt-6 px-4 gap-4 overflow-auto main_container">
        {currentBoardCards.length > 0 &&
          currentBoardCards.map((item, index) => {
            return (
              <div key={index} className="w-1/4 px-2 shrink-0">
                <form
                  className="flex items-center gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    changeNameData(item._id);
                    if (!(item.cardHeader === "Enter a New Name")) {
                      setIsDisable(true);
                    }
                  }}
                >
                  <div className="w-3 h-3 bg-[#33BBC5] rounded-full shrink-0"></div>
                  <input
                    disabled={
                      item.cardHeader === "Enter a New Name" ? isDisable : true
                    }
                    className="placeholder:text-[rgba(255,255,255,0.5)]  bg-transparent border-none outline-none text-white"
                    placeholder="Type A Name..."
                    onBlur={() => {
                      changeNameData(item._id);
                      if (!(item.cardHeader === "Enter a New Name")) {
                        setIsDisable(true);
                      }
                    }}
                    value={
                      item.cardHeader === "Enter a New Name"
                        ? Name
                        : item.cardHeader
                    }
                    onChange={handleChange}
                  />
                  <span className="text-sm text-white">{`(${item.totalTaskes})`}</span>
                </form>
                {item.tasks.length > 0 ? (
                  item.tasks.map((task) => {
                    return <Card Title={task.title} Des={task.description} />;
                  })
                ) : (
                  <>
                    <Card
                      Title="No Taskes Added..."
                      Des="Click On The Add New Task Button"
                    />
                  </>
                )}
              </div>
            );
          })}
        <CreateColumn handleClick={createNewColumn} />
      </div>
    </>
  );
};

export default Main;
