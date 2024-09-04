import React, { useState } from "react";
import { motion } from "framer-motion";

export default function HomeHero({title,idx,grow,hero}) {
    const [hasAnimated, setHasAnimated] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={hasAnimated ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.25, duration: 0.5 }}
            onViewportEnter={() => setHasAnimated(true)}
        >
        <div className="relative text-default">
            <img src={hero} alt="college image" className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[570px] object-cover" />
            <div className="absolute inset-0 bg-yellow3 opacity-25"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-left text-white px-6">
                <div className="flex flex-col items-start pl-6" style={{ transform: "translateX(-10%)" }}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-4 font-main-head">
                        {title.slice(0, idx)}
                        <span className={`cursor animate-blink ${idx === title.length ? "hidden" : ""}`}>|</span>
                    </h1>
                    <div className={`${grow ? "h-1 bg-default w-2/3 sm:w-[110%] md:w-[120%] lg:w-[130%] duration-1000" : "bg-default h-1 w-0 duration-1000"}`}></div>
                </div>
            </div>
        </div>
        </motion.div>
    );
}
