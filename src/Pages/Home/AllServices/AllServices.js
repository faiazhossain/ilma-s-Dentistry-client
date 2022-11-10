import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import AllServiceCard from "./AllServiceCard";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  const { loading } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://ilmas-dentistry-server.vercel.app/allServices")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  return (
    <div data-theme="light" className="p-4">
      <h2 className="text-center text-3xl font-mono font-semibold text-pink-500 my-3">
        Our Services
      </h2>

      {loading ? (
        <h2 className="text-center text-4xl">
          <button className="btn btn-square loading"></button>
        </h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allServices.map((allService) => (
            <AllServiceCard
              key={allService._id}
              allService={allService}
            ></AllServiceCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllServices;
