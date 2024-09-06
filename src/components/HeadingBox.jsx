import { motion } from 'framer-motion'
import React, { useState } from 'react'

const HeadingBox = ({heading}) => {
    const [hasAnimated,setHasAnimated] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={hasAnimated ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.25, duration: 0.5 }}
            onViewportEnter={() => setHasAnimated(true)}
            viewport={{ once: true, threshold: 0.4 }}
            className="flex w-full justify-center items-center gap-5"
        >
            <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
            <div className="bg-[#f4f1f1] text-xl md:text-xl px-4 py-2 text-center font-main-head font-bold rounded-md">{heading}</div>
            <div className="h-[3px] w-[30%] bg-[#f4f1f1]"></div>
        </motion.div>
    )
}

export default HeadingBox
