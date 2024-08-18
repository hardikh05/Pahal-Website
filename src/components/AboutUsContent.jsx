import React from "react";
import Values from "./Values";
import {value} from '../data';

const AboutusContent = () => {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden justify-center items-center gap-10">
      <div className="flex w-full justify-center items-center gap-5">
        <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
        <div className="bg-[#f4f1f1] text-xl px-4 py-2 max-[640px]:text-base font-bold rounded-md">
          {" "}
          What is Pahal?
        </div>
        <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
      </div>

      <div className="rounded-md h-80 w-[35rem] max-[640px]:w-[27rem] max-[640px]:h-60 flex justify-center  items-center">
        <img
          src="main.jpg"
          className="h-80 w-[35rem] max-[640px]:w-[27rem] max-[640px]:h-60 border-[3px] border-yellow-400 rounded-3xl"
        />
      </div>

      <div className="rounded-md w-[80%] flex justify-center items-center">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui minus
          corporis atque voluptatum cupiditate aperiam laudantium molestias a
          ducimus temporibus deserunt at corrupti voluptatibus, accusamus
          necessitatibus nesciunt eligendi tempora sint. Lorem ipsum dolor sit,
          amet.
        </p>
      </div>

      <div className="flex w-full justify-center items-center gap-5">
        <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
        <div className="bg-[#f4f1f1] text-xl px-4 py-2 max-[640px]:text-base font-bold rounded-md">
          Our Mission
        </div>
        <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
      </div>

      <div className="flex justify-evenly w-[90%] flex-wrap items-center p-5 bg-slate-200 max-[640px]:gap-3">
        <div className="rounded-md h-60 w-80 max-[640px]:w-[27rem] max-[640px]:h-60 flex justify-center  items-center">
          <img
            src="main.jpg"
            className="h-60 w-80 max-[640px]:w-[27rem] max-[640px]:h-60 border-[3px] border-yellow-400 rounded-3xl"
          />
        </div>
        <div className="w-[50rem] text-justify">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui minus
            corporis atque voluptatum cupiditate aperiam laudantium molestias a
            ducimus temporibus deserunt at corrupti voluptatibus, accusamus
            necessitatibus nesciunt eligendi tempora sint. Lorem ipsum dolor
            sit, amet.
          </p>
        </div>
      </div>

      <div className="flex w-full justify-center items-center gap-5">
        <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
        <div className="bg-[#f4f1f1] text-xl px-4 py-2 max-[640px]:text-base font-bold rounded-md">
          Our Values
        </div>
        <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
      </div>

      <div className="flex justify-evenly w-[90%] flex-wrap items-center p-5 bg-[#f4f1f1] gap-4 mb-8">
        {value.map((data) => {
          return <Values number={data.number} value={data.value} />;
        })}
      </div>
    </div>
  );
};

export default AboutusContent;
