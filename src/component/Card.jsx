import React from "react";

const Card = (props) => {
  return (
    <>
      <div
        className="Card bg-primary-50 shadow-lg cursor-pointer"
        onClick={props.onNavigate}
      >
        <img className="h-[8rem] mb-5" src={props.image} alt="" />

        <h1 className="text-primary-40 text-[18px] font-semibold">
          {props.name}
        </h1>
        <p className="text-xs mt-2 text-secodary-100">type : {props.type}</p>
      </div>
    </>
  );
};
export default Card;
