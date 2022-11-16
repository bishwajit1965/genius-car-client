import React from "react";

const ChooseUsCard = ({ choose }) => {
  const { title, img, description } = choose;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChooseUsCard;
