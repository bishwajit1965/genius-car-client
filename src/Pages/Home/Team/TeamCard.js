import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
const TeamCard = ({ team }) => {
  const { name, img, designation, description } = team;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src={img} style={{ height: "400px", width: "100%" }} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description.slice(0, 110)} ...</p>
        <p>{designation} ...</p>
        <div className="social-media flex justify-around align-middle my-3 text-center">
          <div className="facebook">
            <FaFacebook style={{ fontSize: "25px" }} />
          </div>
          <div className="twitter">
            <FaTwitter style={{ fontSize: "25px" }} />
          </div>
          <div className="linkedin">
            <FaLinkedin style={{ fontSize: "25px" }} />
          </div>
          <div className="Instagram">
            <FaInstagramSquare style={{ fontSize: "25px" }} />
          </div>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">contact Now</button>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
