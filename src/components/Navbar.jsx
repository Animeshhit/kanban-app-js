import AddIcon from "../assets/addIcon.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBoard } from "../helper";
import { openPopup } from "../state/action-creator";

const Navbar = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [btnStatus, setBtnStatus] = useState(false);
  const storage = useSelector((state) => state.tasks);
  useEffect(() => {
    let data = getBoard(storage, id);
    setTitle(data.name);
    setBtnStatus(data.cards.length > 0);
  }, [id, storage]);
  return (
    <>
      <div className="flex items-center justify-between py-4 px-6 bg-[rgba(0,0,0,0.5)]">
        <div className="navbar_logo text-white heading-font text-2xl">
          {title}
        </div>
        {btnStatus ? (
          <button
            type="button"
            className="py-3 px-4 rounded-full bg-[#64CCC5] flex items-center justify-center gap-2 hover:bg-[#016A70] transition"
            onClick={() => {
              dispatch(openPopup());
            }}
          >
            <img src={AddIcon} alt="add" />
            <span className="heading-font">Add New Task</span>
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Navbar;
