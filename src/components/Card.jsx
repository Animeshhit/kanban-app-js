const Card = (props) => {
  return (
    <>
      <div className="card bg-[#252B48] rounded-md py-2 px-4 my-3">
        <h2 className="heading-font text-white text-xl capitalize">
          {props.Title}
        </h2>
        <p className="text-[rgba(255,255,255,0.5)] text-sm mt-2">{props.Des}</p>
      </div>
    </>
  );
};

export default Card;
