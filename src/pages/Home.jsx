import React, { useEffect, useState } from "react";
import hero from "../assets/hero image.png";
import about from "../assets/about us.jpg";
import Testimonials from "../components/Testimonials";
import reviews from "../data";
import HomeHero from "../components/HomeHero";
import HomeAbout from "../components/HomeAbout";

const Home = () => {
    document.title = "Pahal | Home";

    const title = "PAHAL IIIT NAGPUR";
    console.log(title.length);
    const [idx, setIdx] = useState(0);
    const [grow, setGrow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            const interval = setInterval(() => {
                setIdx((prevIdx) => {
                    if (prevIdx < title.length) {
                        return prevIdx + 1;
                    } else {
                        clearInterval(interval);
                        setGrow(true);
                        return prevIdx;
                    }
                });
            }, 175);
            return () => clearInterval(interval);
        }, 800);

        // Cleanup function to clear the interval when the component unmounts
    }, [title.length]);

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <HomeHero title={title} idx={idx} grow={grow} hero={hero} />

            {/* About Us Section */}
            <HomeAbout about={about} />

            {/* Testimonials */}
            <div className="mt-12 mx-4 sm:mx-8 lg:mx-12">
                <Testimonials reviews={reviews} />
            </div>
        </div>
    );
};

export default Home;
