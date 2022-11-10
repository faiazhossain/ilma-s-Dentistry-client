import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const reviews = useLoaderData();
  console.log(reviews);
  return (
    <div>
      <h2> reviews.</h2>
    </div>
  );
};

export default UpdateUser;
