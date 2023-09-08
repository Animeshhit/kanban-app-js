import CloseIcon from "../assets/close.svg";
import { closePopup, newTask } from "../state/action-creator";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Popup = (props) => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const [card, setCard] = useState();

  const popupStatus = useSelector((state) => state.popup);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (data.title == "" || data.description == "") return;
    try {
      dispatch(newTask(data, id, card ? card : props.currentData[0]._id));
    } catch (err) {}

    setData({
      title: "",
      description: "",
    });
    setCard();
    dispatch(closePopup());
  };

  return (
    <>
      <div
        className={`fixed popup_wrapper ${
          popupStatus ? "show" : ""
        } top-0 left-0 w-full bottom-0 right-0 grid z-10 place-content-center bg-[rgba(0,0,0,0.6)]`}
      >
        <div className="popupbox">
          <div className="flex items-center justify-between my-3">
            <h3 className="heading-font text-2xl text-white">Add New Task</h3>
            <button
              type="button"
              className="flex items-center justify-center cursor-pointer"
              onClick={() => {
                dispatch(closePopup());
              }}
            >
              <img src={CloseIcon} alt="close" />
            </button>
          </div>
          <div className="input_box title">
            <label
              htmlFor="title"
              className="font-medium text-sm block mb-2 text-[rgba(255,255,255,0.6)]"
            >
              Title
            </label>
            <input
              className="bg-gray-700 border-none outline-none w-full py-3 px-4 rounded-md resize-none text-white text-sm"
              placeholder="Search for anything..."
              type="text"
              name="title"
              value={data.title}
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
            />
          </div>
          <div className="input_box description">
            <label
              htmlFor="desc"
              className="text-sm font-medium block mb-2 text-[rgba(255,255,255,0.6)]"
            >
              Description
            </label>
            <textarea
              className="bg-gray-700 border-none text-white outline-none w-full py-3 px-4 rounded-md resize-none h-24 text-sm"
              id="desc"
              name="description"
              value={data.description}
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
              placeholder="e.g. It Is Very Important to take a break. This 15 minutes break will recharge you batteries..."
            />
          </div>
          <div className="input_box status">
            <label
              htmlFor="tasks"
              className="block mb-2 text-sm font-medium text-[rgba(255,255,255,0.7)]"
            >
              Select an Card
            </label>
            <select
              id="tasks"
              value={card}
              onChange={(e) => {
                setCard(e.target.value);
              }}
              className=" w-full py-2 px-4 border-none outline-none bg-gray-700 rounded-md text-sm text-white"
            >
              {props.currentData.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.cardHeader}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="my-3 py-3 px-4 bg-[#64CCC5] font-medium w-full text-sm rounded-md cursro-pointer hover:bg-[#016A70] transition"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Popup;
