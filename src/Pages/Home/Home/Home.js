import React from "react";
import Banner from "../Banner/Banner";
import GetFreeTips from "../GetFreeTips/GetFreeTips";
import PatientsOpinion from "../PatientsOpinion/PatientsOpinion";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <GetFreeTips></GetFreeTips>
      <PatientsOpinion></PatientsOpinion>
    </div>
  );
};

export default Home;
