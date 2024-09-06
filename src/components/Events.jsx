import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Events = ({ data, index, total }) => {

    const [hasAnimated, setHasAnimated] = useState(false);


    return (


        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={hasAnimated ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.25, duration: 0.5 }}
            onViewportEnter={() => setHasAnimated(true)}
            viewport={{ once: true, threshold: 0.4 }}
            className={`w-full ${index === total ? 'mb-20' : 'mb-0'} mt-20`}
        >
            <div className={`flex w-full flex-col ${index%2 === 0  ? 'lg:flex-row' : 'lg:flex-row-reverse'} justify-center items-center gap-10 pt-18`}>
                <div className='w-1/2 max-[640px]:w-full'>
                    <h1 className='text-xl md:text-3xl font-main-head font-bold rounded-md'>{index}. {data.EventName}</h1>
                    <p className="rounded-md text-xl font-small-head w-full md:w-[100%] text-left md:text-left">{data.AboutEvent}</p>
                </div>
                <div className="w-full lg:w-1/3 mt-6 lg:mt-0 flex justify-center">
                    <div className="w-full max-w-md lg:max-w-lg rounded-md bg-brand-gradient p-1">
                        <img src={data.image1} alt="about us" className="w-full h-auto rounded-md" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Events
