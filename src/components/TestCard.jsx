import React from "react";
import "./TestCard.css";

const TestCard = (props) => {
  const review = props.review;

  if (!review || !review.image) {
    return <div>No review or image found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row relative w-full  md:p-0">
      <div className="rect absolute"></div>
      <div className="relative md:absolute px-6 py-8 z-[10] mx-auto">
        <img
          className="border-[#fefdd9] border-8 aspect-square rounded-full w-[100px] h-[100px] md:w-[140px] md:h-[140px] z-25"
          src={review.image}
          alt=""
        />
      </div>
      <div className="md:pl-52 flex flex-col md:mt-12 text-center md:text-left">
        <div className="font-bold font-main-head text-lg md:text-xl">
          <h3>{review.name}</h3>
        </div>
        <div className="text-xs md:text-sm font-small-head opacity-50 font-semibold">
          <h6>{review.place}</h6>
        </div>
        <div className="w-full md:text-md text-sm md:pr-16 font-small-head m-4 md:mt-0">
          <p>{review.text}</p>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
