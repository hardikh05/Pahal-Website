import React from "react";
import "./TestCard.css";
import img1 from "../assets/about us.jpg";

const TestCard = (props) => {
  const review = props.review;

  if (!review || !review.image) {
    return <div>No review or image found</div>;
  }

  return (
    <div className="flex relative w-full">
      <div className="rect absolute"></div>
      <div className=" flex justify-between">
        <div className="absolute px-6 py-8 z-[10] mx-auto">
          <img
            className="border-[#fefdd9] border-8 aspect-square rounded-full w-[140px] h-[140px] z-25"
            src={review.image}
            alt=""
          />
        </div>
        <div className="pl-52 flex flex-col mt-12">
          <div className="font-bold font-main-head text-xl">
            <h3>{review.name}</h3>
          </div>
          <div className="text-sm font-small-head opacity-50 font-semibold">
            <h6>{review.place}</h6>
          </div>
          <div className="w-full pr-16 font-small-head">
            <p>
              {review.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCard;