import React from "react";

// This is section 2
const PatientsOpinion = () => {
  return (
    <div className="my-12 p-12 bg-orange-200 shadow-2xl rounded-3xl">
      <h2 className="text-5xl">What Our Patients Say!</h2>
      <div className="carousel w-full">
        <div
          id="item1"
          className="carousel-item w-full flex flex-col my-10 justify-center items-center"
        >
          <h2 className="text-xl ">
            "Dr. Ilma and her staff are excellent. They are professional and
            they take the time to explain everything to us.!"
          </h2>
          <p>~ Tithi</p>
        </div>
        <div
          id="item2"
          className="carousel-item w-full flex flex-col my-10 justify-center items-center"
        >
          <h2 className="text-xl ">
            "I am very Pleased to get survice from Doctor Ilma. She is one of a
            kind!"
          </h2>
          <p>~ Faiaz</p>
        </div>
        <div
          id="item3"
          className="carousel-item w-full flex flex-col my-10 justify-center items-center"
        >
          <h2 className="text-xl ">
            "Highly recommend! I have LOTS of anxiety about going to the
            dentist. After this visit, she made me feel comfortable and I
            believe the treatment plan is actionable and has my best interest in
            mind."
          </h2>
          <p>~ Oishee</p>
        </div>
        <div
          id="item4"
          className="carousel-item w-full flex flex-col my-10 justify-center items-center"
        >
          <h2 className="text-xl ">
            "Just saw Dr. Ilma at Ilma's Dentistry. Great, caring, attentive
            dentist and staff!!"
          </h2>
          <p>~ Nabila</p>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default PatientsOpinion;
