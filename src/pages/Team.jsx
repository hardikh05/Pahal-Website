import React from "react";
import TeamCard from "../components/TeamCard";
import "./Team.css";

const Team = () => {
  return (
    <div className="">
      <div className="patrons">
        <div className="flex items-center justify-between mt-10">
          <div className="line"></div>
          <div className="bg-[#f4f1f1] rounded-lg w-64">
            <h1 className="font-main-head text-2xl font-bold p-2 text-center">
              Our Patrons
            </h1>
          </div>
          <div className="line"></div>
        </div>
        <div className="flex justify-center items-center space-x-20 mt-12">
          <TeamCard></TeamCard>
          <TeamCard></TeamCard>
        </div>
      </div>
      <div className="faculty">
        <div className="flex items-center justify-between mt-16">
          <div className="line"></div>
          <div className="bg-[#f4f1f1] rounded-lg w-64">
            <h1 className="font-main-head text-2xl font-bold p-2 text-center">
              Faculty Coordinators
            </h1>
          </div>
          <div className="line"></div>
        </div>
        <div className="flex justify-center items-center space-x-20 mt-12">
          <TeamCard></TeamCard>
          <TeamCard></TeamCard>
        </div>
      </div>
    </div>
  );
};

export default Team;
