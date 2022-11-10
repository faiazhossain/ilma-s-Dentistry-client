import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div data-theme="light" className="p-4 flex flex-col items-center">
      <h2 className="text-center text-3xl font-mono font-semibold text-pink-500 my-3">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <Link to="/allServices">
        <button className="btn btn-secondary mt-8">See All Services</button>
      </Link>
    </div>
  );
};

export default Services;
