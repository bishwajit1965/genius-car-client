import React from "react";
import { IoCalendarNumberSharp, IoCall, IoLocation } from "react-icons/io5";

const MoreServices = () => {
  return (
    <>
      <div className="text-center my-10">
        <button className="btn btn-outline btn-secondary">More Services</button>
      </div>

      <div className="flex justify-around bg-gray-900 text-white py-10 rounded-md align-middle my-10 shadow-sm">
        <div className="flex align-middle gap-3">
          <div className="grid justify-center items-center">
            <IoCalendarNumberSharp style={{ fontSize: "40px" }} />
          </div>
          <div className="">
            <p>We are open monday-friday</p>
            <p>7:00 am - 9:00 pm</p>
          </div>
        </div>

        <div className="flex align-middle gap-3">
          <div className="grid justify-center items-center">
            <IoCall style={{ fontSize: "40px" }} />
          </div>
          <div className="">
            <p>We are open monday-friday</p>
            <p>7:00 am - 9:00 pm</p>
          </div>
        </div>

        <div className="flex align-middle gap-3">
          <div className="grid justify-center items-center">
            <IoLocation style={{ fontSize: "40px" }} />
          </div>
          <div className="">
            <p>We are open monday-friday</p>
            <p>7:00 am - 9:00 pm</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreServices;
