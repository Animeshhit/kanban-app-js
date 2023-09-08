import AddIcon from "../assets/AddIconWhite.svg";

const creteButtnStyles = {
  height: "auto",
};

const createColumn = (props) => {
  return (
    <>
      <div
        className="w-1/4 py-12 bg-[#252B48] rounded-md flex items-center justify-center cursor-pointer shrink-0"
        style={creteButtnStyles}
        onClick={props.handleClick}
      >
        <div className="flex items-center justify-center gap-2">
          <img src={AddIcon} alt="add" />
          <span className="text-white">Create New Card</span>
        </div>
      </div>
    </>
  );
};

export default createColumn;
