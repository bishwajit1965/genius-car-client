import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://genius-car-server-2i9prbc5j-paulbishwajit09-gmailcom.vercel.app/services"
    )
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="py-10">
      <div className="text-center py-10">
        <p className="text-2xl font-bold text-orange-500">Services</p>
        <h2 className="text-4xl font-bold my-4">Our Service Area</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 shadow-sm md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
