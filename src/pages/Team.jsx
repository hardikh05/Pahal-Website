import React from "react";
import TeamCard from "../components/TeamCard";
import "./Team.css";
import hero from "../assets/hero image.png";
import patcoord from "../patcoord.json";
import founders from "../founders.json";
import web from "../web-team.json";
import { motion } from "framer-motion";

const Team = () => {
    document.title = "Pahal | Team";
    const [hasAnimated, setHasAnimated] = React.useState(false);
    const [hasAnimated2, setHasAnimated2] = React.useState(false);
    const [hasAnimated3, setHasAnimated3] = React.useState(false);
    const [hasAnimated4, setHasAnimated4] = React.useState(false);
    const [hasAnimated5, setHasAnimated5] = React.useState(false);
    return (
        <div className="">
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                animate={hasAnimated ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.25, duration: 0.5 }}
                onViewportEnter={() => setHasAnimated(true)}
            >
                <div className="relative w-full">
                    <img src={hero} alt="college image" className="w-full sm:h-[250px] md:h-[700px] object-cover" />
                    <div className="absolute inset-0 bg-yellow3 opacity-20"></div>

                    <div className="absolute top-3 right-3 sm:top-12 sm:right-12 text-right pr-5">
                        <h1 className="text-xl sm:text-3xl md:text-4xl text-white font-main-head font-bold">Team behind the Success</h1>
                        {/* <div className="h-1 bg-default w-full mt-2"></div> */}
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                animate={hasAnimated2 ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.25, duration: 0.5 }}
                onViewportEnter={() => setHasAnimated2(true)}
            >
                <div className="patrons mt-10">
                    <div className="flex w-full bg-red-800 justify-center items-center gap-5">
                        <div className={`${hasAnimated2 ? "h-[4px] rounded-md -z-1 absolute left-[15%] w-[40%] bg-[#f4f1f1] animate-[anim_2.5s_linear]": ""}`}></div>
                        <div className={`${hasAnimated2 ? "h-[4px] rounded-md -z-1 w-[30%] absolute left-[50%] bg-[#f4f1f1] animate-[anim2_2.5s_linear]":"" }`}></div>
                        <div className={`${hasAnimated2 ? "bg-[#f4f1f1] text-xl z-1 md:text-xl absolute left-[50%] -translate-x-1/2 px-4 py-2 font-main-head text-center font-bold rounded-m animate-[anim3_0.5s_linear]":""}`}>
                            Our Patrons
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
                        <TeamCard patcoord={patcoord[0]} />
                        <TeamCard patcoord={patcoord[1]} />
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                animate={hasAnimated3 ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.25, duration: 0.5 }}
                onViewportEnter={() => setHasAnimated3(true)}
            >
                <div className="faculty-coord mt-10">
                    <div className="flex w-full bg-red-800 justify-center items-center gap-5">
                        <div className={`${hasAnimated3 ? "h-[4px] rounded-md -z-1 absolute left-[15%] w-[40%] bg-[#f4f1f1] animate-[anim_2.5s_linear]": ""}`}></div>
                        <div className={`${hasAnimated3 ? "h-[4px] rounded-md -z-1 w-[30%] absolute left-[50%] bg-[#f4f1f1] animate-[anim2_2.5s_linear]":"" }`}></div>
                        <div className={`${hasAnimated3 ? "bg-[#f4f1f1] text-xl z-1 md:text-xl absolute left-[50%] -translate-x-1/2 px-4 py-2 font-main-head text-center font-bold rounded-m animate-[anim3_0.5s_linear]":""}`}>
                            Faculty Coordinator
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
                        <TeamCard patcoord={patcoord[2]} />
                        <TeamCard patcoord={patcoord[3]} />
                        <TeamCard patcoord={patcoord[4]} />
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                animate={hasAnimated4 ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.25, duration: 0.5 }}
                onViewportEnter={() => setHasAnimated4(true)}
            >
                <div className="founders mt-10">
                    <div className="flex w-full bg-red-800 justify-center items-center gap-5">
                        <div className={`${hasAnimated4 ? "h-[4px] rounded-md -z-1 absolute left-[15%] w-[40%] bg-[#f4f1f1] animate-[anim_2.5s_linear]": ""}`}></div>
                        <div className={`${hasAnimated4 ? "h-[4px] rounded-md -z-1 w-[30%] absolute left-[50%] bg-[#f4f1f1] animate-[anim2_2.5s_linear]":"" }`}></div>
                        <div className={`${hasAnimated4 ? "bg-[#f4f1f1] text-xl z-1 md:text-xl absolute left-[50%] -translate-x-1/2 px-4 py-2 font-main-head text-center font-bold rounded-m animate-[anim3_0.5s_linear]":""}`}>
                            The Founders
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
                        <TeamCard founders={founders[0]} />
                        <TeamCard founders={founders[1]} />
                        <TeamCard founders={founders[2]} />
                        <TeamCard founders={founders[3]} />
                        <TeamCard founders={founders[4]} />
                        <TeamCard founders={founders[5]} />
                        <TeamCard founders={founders[6]} />
                        <TeamCard founders={founders[7]} />
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                animate={hasAnimated5 ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.25, duration: 0.5 }}
                onViewportEnter={() => setHasAnimated5(true)}
            >
                <div className="web mt-10">
				<div className="flex w-full bg-red-800 justify-center items-center gap-5">
                        <div className={`${hasAnimated5 ? "h-[4px] rounded-md -z-1 absolute left-[15%] w-[40%] bg-[#f4f1f1] animate-[anim_2.5s_linear]": ""}`}></div>
                        <div className={`${hasAnimated5 ? "h-[4px] rounded-md -z-1 w-[30%] absolute left-[50%] bg-[#f4f1f1] animate-[anim2_2.5s_linear]":"" }`}></div>
                        <div className={`${hasAnimated5 ? "bg-[#f4f1f1] text-xl z-1 md:text-xl absolute left-[50%] -translate-x-1/2 px-4 py-2 font-main-head text-center font-bold rounded-m animate-[anim3_0.5s_linear]":""}`}>
                            Web Dev Team
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
                        <TeamCard web={web[0]} />
                        <TeamCard web={web[1]} />
                        <TeamCard web={web[2]} />
                        <TeamCard web={web[3]} />
                        <TeamCard web={web[4]} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Team;
