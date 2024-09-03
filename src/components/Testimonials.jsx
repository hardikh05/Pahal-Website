import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from "react";
import "./Testimonials.css";
import TestCard from "./TestCard";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonials = (props) => {
    const reviews = props.reviews;
    const [hasAnimated, setHasAnimated] = React.useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={hasAnimated ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.25, duration: 0.5 }}
            onViewportEnter={() => setHasAnimated(true)}
        >
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex w-full justify-center items-center gap-5">
                        <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
                        <div className="bg-[#f4f1f1] text-xl px-4 py-2 max-[640px]:text-base font-bold rounded-md font-main-head">Testimonials</div>
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
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        pagination={{ el: ".swiper-pagination", clickable: true }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        {reviews.map((review, index) => (
                            <SwiperSlide key={index}>
                                <TestCard review={review} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="slider-controler">
                        <div className="swiper-button-prev cursor-pointer slider-arrow">
                            <span className="w-5 h-5 text-[#000]">
                                <FaArrowLeft className="text-sm w-2 h-2" />
                            </span>
                        </div>
                        <div className="swiper-button-next cursor-pointer slider-arrow">
                            <span className="w-5 h-5 text-[#000]">
                                <FaArrowRight className="text-sm w-2 h-2" />
                            </span>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Testimonials;
