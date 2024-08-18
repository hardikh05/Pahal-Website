import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonials.css";
import TestCard from "./TestCard";

const Testimonials = (props) => {
  let reviews = props.reviews;
  return (
    <div>
      <div className="flex items-center justify-between">
      <div className="flex w-full justify-center items-center gap-5">
        <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
        <div className="bg-[#f4f1f1] text-xl px-4 py-2 max-[640px]:text-base font-bold rounded-md font-main-head">
          {" "}
          Testimonials
        </div>
        <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
      </div>
      </div>
      <div className="container">
        <Swiper 
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          className="swiper-container"
          modules={[EffectCoverflow, Pagination, Navigation]}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev",
            clickable: true,
          }}
        >
          <SwiperSlide>
            <TestCard review={reviews[0]}></TestCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestCard review={reviews[1]}></TestCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestCard review={reviews[2]}></TestCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestCard review={reviews[3]}></TestCard>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;