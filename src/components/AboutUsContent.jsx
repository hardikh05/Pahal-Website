import React from "react";
import Values from "./Values";
import { value } from "../data";
import { motion } from "framer-motion";

const AboutusContent = () => {
    const [hasAnimated, setHasAnimated] = React.useState(false);
    const [hasAnimated2, setHasAnimated2] = React.useState(false);
    const [hasAnimated3, setHasAnimated3] = React.useState(false);

    return (
        <div className="flex flex-col h-full w-full overflow-hidden justify-center items-center gap-10 px-4 md:px-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                animate={hasAnimated ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.25, duration: 0.5 }}
                onViewportEnter={() => setHasAnimated(true)}
                viewport={{once: true, threshold: 0.4}}
                className="flex flex-col w-full justify-center items-center gap-10 pt-18"
            >
                <div className="flex w-full justify-center items-center gap-5">
                    <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
                    <div className="bg-[#f4f1f1] text-xl md:text-xl px-4 py-2 text-center font-main-head font-bold rounded-md">What is Pahal?</div>
                    <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
                </div>

                <div className="rounded-md h-80 w-full md:w-[35rem] sm:w-[27rem] max-[640px]:h-60 flex justify-center items-center">
                    <img src="../assets/main.jpg" className="h-80 w-full md:w-[35rem] sm:w-[27rem] max-[640px]:h-60 border-[3px] border-yellow-400 rounded-3xl" />
                </div>

                <div className="rounded-md font-small-head w-full md:w-[80%] text-center md:text-left">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui minus corporis atque voluptatum cupiditate aperiam laudantium molestias a ducimus temporibus
                        deserunt at corrupti voluptatibus, accusamus necessitatibus nesciunt eligendi tempora sint. Lorem ipsum dolor sit, amet.
                    </p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                animate={hasAnimated2 ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.25, duration: 0.5 }}
                onViewportEnter={() => setHasAnimated2(true)}
                viewport={{once: true, threshold: 0.4}}
                className="flex flex-col w-full justify-center items-center gap-10 pt-18"
            >
                <div className="flex w-full justify-center items-center gap-5">
                    <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
                    <div className="bg-[#f4f1f1] text-xl font-main-head md:text-xl px-4 py-2 text-center font-bold rounded-md">Our Mission</div>
                    <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
                </div>

                <div className="flex flex-col md:flex-row justify-evenly w-full md:w-[90%] flex-wrap items-center p-5 py-10 rounded-md bg-slate-200 gap-5 max-[640px]:gap-3">
                    <div className="rounded-md h-60 w-full md:w-80 sm:w-[27rem] max-[640px]:h-60 flex justify-center items-center">
                        <img src="main.jpg" className="h-60 w-full md:w-80 sm:w-[27rem] max-[640px]:h-60 border-[3px] border-yellow-400 rounded-3xl" />
                    </div>
                    <div className="w-full font-small-head md:w-[50rem] text-justify">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui minus corporis atque voluptatum cupiditate aperiam laudantium molestias a ducimus
                            temporibus deserunt at corrupti voluptatibus, accusamus necessitatibus nesciunt eligendi tempora sint. Lorem ipsum dolor sit, amet.
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                animate={hasAnimated3 ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.25, duration: 0.5 }}
                onViewportEnter={() => setHasAnimated3(true)}
                viewport={{once: true, threshold: 0.4}}
                className="flex flex-col w-full justify-center items-center gap-10 pt-18"
            >
                <div className="flex w-full justify-center items-center gap-5">
                    <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
                    <div className="bg-[#f4f1f1] font-main-head text-xl md:text-xl px-4 py-2 text-center font-bold rounded-md">Our Values</div>
                    <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
                </div>

                <div className="flex flex-wrap justify-evenly w-full md:w-[90%] items-center font-small-head p-5  gap-4 mb-8">
                    {value.map((data) => {
                        return <Values number={data.name} value={data.value} />;
                    })}
                </div>
            </motion.div>
        </div>
    );
};

export default AboutusContent;
