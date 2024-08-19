import React from "react";
import TeamCard from "../components/TeamCard";
import "./Team.css";
import hero from "../assets/hero image.png";
import patcoord from "../patcoord.json";
import founders from '../founders.json';
import web from '../web-team.json'

const Team = () => {
  document.title = "Pahal | Team";
  return (
    <div className="">
      <div className="relative w-full">
        <img
          src={hero}
          alt="college image"
          className="w-full sm:h-[250px] md:h-[700px] object-cover"
        />
        <div className="absolute inset-0 bg-yellow3 opacity-20"></div>

        <div className="absolute top-3 right-3 sm:top-12 sm:right-12 text-right pr-5">
          <h1 className="text-xl sm:text-3xl md:text-4xl text-white font-main-head font-bold">
            Team behind the Success
          </h1>
          {/* <div className="h-1 bg-default w-full mt-2"></div> */}
        </div>
      </div>

      <div className="patrons mt-10">
        <div className="flex w-full justify-center items-center gap-5">
          <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
          <div className="bg-[#f4f1f1] text-xl md:text-xl px-4 py-2 font-main-head text-center font-bold rounded-md">
            Our Patrons
          </div>
          <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
          <TeamCard patcoord={patcoord[0]} />
          <TeamCard patcoord={patcoord[1]} />
        </div>
      </div>

      <div className="faculty-coord mt-10">
        <div className="flex w-full justify-center items-center gap-5">
          <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
          <div className="bg-[#f4f1f1] text-xl md:text-xl px-4 py-2 font-main-head text-center font-bold rounded-md">
            Faculty Coordinators
          </div>
          <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
          <TeamCard patcoord={patcoord[2]} />
          <TeamCard patcoord={patcoord[3]} />
          <TeamCard patcoord={patcoord[4]} />
        </div>
      </div>

      <div className="founders mt-10">
        <div className="flex w-full justify-center items-center gap-5">
          <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
          <div className="bg-[#f4f1f1] text-xl md:text-xl px-4 py-2 font-main-head text-center font-bold rounded-md">
            The Founders
          </div>
          <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
          <TeamCard founders={founders[0]} />
          <TeamCard founders={founders[1]} />
          <TeamCard founders={founders[2]} />
          <TeamCard founders={founders[3]} />
          <TeamCard founders={founders[4]} />
          <TeamCard founders={founders[5]} />
          <TeamCard founders={founders[6]} />
          <TeamCard founders={founders[7]} />
        </div>
      </div>

      <div className="web mt-10">
        <div className="flex w-full justify-center items-center gap-5">
          <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
          <div className="bg-[#f4f1f1] text-xl md:text-xl px-4 py-2 font-main-head text-center font-bold rounded-md">
            Web Dev Team
          </div>
          <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
          <TeamCard web={web[0]} />
          <TeamCard web={web[1]} />
          <TeamCard web={web[2]} />
          <TeamCard web={web[3]} />
          <TeamCard web={web[4]} />
        </div>
      </div>

    </div>
  );
};

export default Team;
