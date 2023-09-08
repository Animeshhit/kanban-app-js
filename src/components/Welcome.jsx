import ArrowIcon from "../assets/arrow-with-scribble.svg";
import ArrowIcon2 from "../assets/scribble.svg";
import leftIcon from "../assets/left_icon.svg";

const IconStyles = {
  position: "absolute",
  top: "46%",
  left: "5%",
  zIndex: "-1",
};

const IconStyles2 = {
  position: "absolute",
  top: "46%",
  right: "5%",
  zIndex: "-1",
};

const IconImage = {
  width: "20rem",
  transform: "rotate(190deg)",
};

const Welcome = () => {
  return (
    <div className="text-center relative">
      <h2 className="heading-font text-white mt-52 text-7xl text-[rgba(255,255,255,0.9)]">
        WelCome To
        <span className="before:block mx-4 before:absolute before:-inset-2 before:-skew-y-3 before:bg-[#64CCC5] relative inline-block">
          <span className="relative text-black heading-font">Kanban</span>
        </span>
        App
      </h2>
      <p className="mt-6 text-[rgba(255,255,255,0.7)]">
        The Best, Secure And Presonal Task Management Platform
      </p>

      <button
        type="button"
        className="mt-12 py-3 flex mx-auto items-center justify-center gap-2 px-4 border-none outline-none bg-[#64CCC5] hover:bg-[#016A70] heading-font rounded-full transition"
      >
        <img src={leftIcon} alt="left_arrow" />
        Start With Creating A New Board
      </button>

      <div style={IconStyles}>
        <img className="w-52 rotate-180" style={IconImage} src={ArrowIcon2} />
      </div>
      <div style={IconStyles2}>
        <img className="w-52 rotate-180" style={IconImage} src={ArrowIcon} />
      </div>
    </div>
  );
};

export default Welcome;
