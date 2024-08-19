import React from "react";
import "./TestCard.css";

const TestCard = (props) => {
    const review = props.review;

    if (!review || !review.image) {
        return <div>No review or image found</div>;
    }

    return (
        <div class="max-w-sm rounded flex flex-col items-center justify-center pt-4 bg-[#fff8ac] overflow-hidden shadow-lg">
            <img class="h-[120px] w-auto rounded-full border-2 aspect-square " src={review.image} alt="Sunset in the mountains" />
            <div class="px-6 py-4 flex flex-col items-center justify-center">
                <div class="font-bold text-xl">
                    {review.name}
                </div>
                <div class="font-bold text-md text-[#6d6d6d] mb-2">
                    {review.place}
                </div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-16 pb-2">
                {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
            </div>
        </div>
    );
};

export default TestCard;
