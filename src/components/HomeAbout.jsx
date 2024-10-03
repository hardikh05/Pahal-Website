import React, { useState } from "react";
import { motion } from "framer-motion";

export default function HomeAbout({ about }) {
    const [hasAnimated, setHasAnimated] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={hasAnimated ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.25, duration: 0.5 }}
            onViewportEnter={() => setHasAnimated(true)}
        >
            <div className="p-6 mt-10 mx-4 sm:mx-8 lg:mx-12">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="flex flex-col lg:w-1/2 lg:pr-8">
                        <div className="text-2xl sm:text-3xl font-main-head font-bold">
                            <h2>About PAHAL</h2>
                        </div>
                        <p className="font-small-head mt-4 lg:mt-6 text-base sm:text-lg lg:text-xl">
                            The 'पहल' initiative, spearheaded by the students of IIIT Nagpur, stands as a beacon of hope for the Waranga Village community and the college's support staff, providing them with invaluable opportunities for growth and development. This transformative program caters to various subjects, including English (both speaking and writing), personality development, higher mathematics, and cyber security. Moreover, it nurtures co-curricular skills such as singing, dancing, flute playing, and dramatics, fostering holistic growth among the participants.
                        Since its inception on 10 June 2023, the 'पहल' initiative has garnered unprecedented support from the community, witnessing a steady increase in the number of enthusiastic participants with each class. The local administration's unwavering assistance has further amplified its impact. Through these sessions, students have reported remarkable improvements in their academic performance, increased confidence, and a newfound drive to achieve their goals. Additionally, the initiative has honed their co-curricular talents, enriching their overall skill set.
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
        </motion.div>
    );
}
