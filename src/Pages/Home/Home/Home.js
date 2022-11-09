import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import GetFreeTips from "../GetFreeTips/GetFreeTips";
import PatientsOpinion from "../PatientsOpinion/PatientsOpinion";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <GetFreeTips></GetFreeTips>
      <PatientsOpinion></PatientsOpinion>
    </div>
  );
};

export default Home;
