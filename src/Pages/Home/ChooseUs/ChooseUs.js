import React, { useEffect, useState } from "react";
import ChooseUsCard from "./ChooseUsCard";

const ChooseUs = () => {
  const [chooseUs, setChooseUs] = useState([]);
  useEffect(() => {
    fetch("./ChooseUs.json")
      .then((response) => response.json())
      .then((jsonData) => setChooseUs(jsonData));
  }, []);
  return (
    <div className="py-10">
      <div className="text-center py-10">
        <p className="text-2xl font-bold text-orange-500">Core Features</p>
        <h2 className="text-4xl font-bold my-4">Why Will Choose Us</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 shadow-sm md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {chooseUs.map((choose) => (
          <ChooseUsCard key={choose._id} choose={choose} />
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
