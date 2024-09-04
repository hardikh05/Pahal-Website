import React from "react";
import "./TestCard.css";

const TestCard = (props) => {
    const review = props.review;

    if (!review || !review.image) {
        return <div>No review or image found</div>;
    }

    return (
        <div id="card" class="max-w-lg h-[25rem] rounded-lg border-2 border-[#a79318] flex flex-col items-center justify-center pt-4 bg-[#fbe2a2] overflow-hidden shadow-lg ">
            <img class="md:h-[120px] h-[100px] w-auto rounded-full border-2 aspect-square " src={review.image} alt="Review Image" />
            <div class="px-6 py-4 flex flex-col items-center justify-center">
                <div class="font-bold text-lg md:text-xl">
                    {review.name}
                </div>
                <div class="font-bold text-md text-[#383838] mb-2">
                    {review.place}
                </div>
<<<<<<< Updated upstream
                <p class="text-gray-900 text-sm md:text-base">
=======
<<<<<<< HEAD
                <p class="text-gray-700 text-base">
=======
                <p class="text-gray-900 text-sm md:text-base">
>>>>>>> ae0ca71d059906025d0508cbcb5aabb167bb2a1c
>>>>>>> Stashed changes
                    {review.text}
                </p>
            </div>
        </div>
    );
};

export default TestCard;
