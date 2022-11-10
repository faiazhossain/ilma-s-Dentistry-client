import React, { useEffect, useState } from "react";
import AllServiceCard from "./AllServiceCard";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  return (
    <div data-theme="light" className="p-4">
      <h2 className="text-center text-3xl font-mono font-semibold text-pink-500 my-3">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allServices.map((allService) => (
          <AllServiceCard
            key={allService._id}
            allService={allService}
          ></AllServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
