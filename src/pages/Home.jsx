import React from "react";
import hero from "../assets/hero image.png";
import about from "../assets/about us.jpg";
import TestCard from "../components/TestCard"
import Testimonials from "../components/Testimonials";
import reviews from '../data'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      {/* hero image */}
      <div className="flex flex-col items-center relative text-default">
        <img src={hero} alt="college image" className="w-full h-[570px]" />
        <div className="w-full absolute w- h-[570px] bg-yellow3 opacity-25 overlay"></div>
        <div className="absolute pl-72 pt-44 w-full overlay">
          <h1 className=" text-6xl py-4 pb-6 font-main-head">
            PAHAL IIIT NAGPUR
          </h1>
          <div className="h-1 bg-default w-4/5 "></div>
        </div>
      </div>

      {/* about us section */}
      <div className="about-us-section p-6 mt-20 ml-7 mr-10">
        
        <div className="flex">
          <div className="flex-col">
          <div className="text-3xl font-main-head font-bold">
          <h2>About PAHAL</h2>
        </div>
          <p className="font-small-head mt-5 w-[80%] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui minus
            corporis atque voluptatum cupiditate aperiam laudantium molestias a
            ducimus temporibus deserunt at corrupti voluptatibus, accusamus
            necessitatibus nesciunt eligendi tempora sint. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Qui minus corporis atque
            voluptatum cupiditate aperiam laudantium molestias a ducimus
            temporibus deserunt at corrupti voluptatibus, accusamus
            necessitatibus nesciunt eligendi tempora sint. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Qui minus corporis atque
            voluptatum cupiditate aperiam laudantium molestias a ducimus
            temporibus deserunt at...
          </p>
          <button className="btn mt-10 font-small-head">READ MORE...</button>
          </div>
          
          <div class="w-[170%] rounded-md bg-brand-gradient p-1 ml-auto flex">
              <img src={about} alt="about us" />
          </div>
        </div>
        
      </div>

      {/* Testimonials */}
      <div className="mt-20">
      <Testimonials reviews={reviews}></Testimonials>
      </div>
    </div>
  );
};

export default Home;
