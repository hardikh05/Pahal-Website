import React from 'react'
import AboutusContent from '../components/AboutUsContent'
import hero from '../assets/main.jpg'

const AboutUs = () => {
  document.title = "Pahal | About Us";
  return (
    <div className='h-full w-full'>
      <div className="relative text-default pb-5">
        <div className="relative w-full">
          <img src={hero} alt="college image" className="w-full sm:h-[250px] md:h-[700px] object-cover" />
          <div className="absolute inset-0 bg-yellow3 opacity-10"></div>
        </div>
        <div className="absolute top-3 right-3 sm:top-12 sm:right-12 text-right pr-5">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-main-head font-bold">
            About Us
          </h1>
          {/* <div className="h-1 bg-default w-full mt-2"></div> */}
        </div>
      </div>
      <AboutusContent />
    </div>
  )
}

export default AboutUs
