import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price, description } = service;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src={img} style={{ height: "300px", width: "100%" }} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 110)} ...</p>
        <p className="text-2xl text-bold text-orange-500">Price: $ {price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
