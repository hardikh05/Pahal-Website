import React from "react";
import hero from "../assets/hero image.png";
import about from "../assets/about us.jpg";
import Testimonials from "../components/Testimonials";
import reviews from '../data';

const Home = () => {
  document.title = "Pahal | Home";

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative text-default">
        <img src={hero} alt="college image" className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[570px] object-cover" />
        <div className="absolute inset-0 bg-yellow3 opacity-25"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-left text-white px-6">
          <div className="flex flex-col items-start pl-6" style={{ transform: 'translateX(-10%)' }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-4 font-main-head">
              PAHAL IIIT NAGPUR
            </h1>
            <div className="h-1 bg-default w-2/3 sm:w-[110%] md:w-[120%] lg:w-[130%]"></div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="p-6 mt-10 mx-4 sm:mx-8 lg:mx-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:w-1/2 lg:pr-8">
            <div className="text-2xl sm:text-3xl font-main-head font-bold">
              <h2>About PAHAL</h2>
            </div>
            <p className="font-small-head mt-4 lg:mt-6 text-base sm:text-lg lg:text-xl">
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
            <button className="btn mt-6 lg:mt-8 font-small-head">READ MORE...</button>
          </div>

          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg rounded-md bg-brand-gradient p-1">
              <img src={about} alt="about us" className="w-full h-auto rounded-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-12 mx-4 sm:mx-8 lg:mx-12">
        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
};

export default Home;
