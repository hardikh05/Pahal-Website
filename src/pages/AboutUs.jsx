import React from 'react'
import AboutusContent from '../components/AboutUsContent'
import hero from '../assets/main.jpg'

const AboutUs = () => {
  return (
      <div className='h-full w-full'>
        <div className="flex flex-col items-center relative text-default pb-5">
        <img src={hero} alt="college image" className="w-full h-[570px]" />
        {/* <div className="w-full absolute w- h-[570px] bg-yellow3 opacity-25 overlay"></div> */}
        <div className="absolute pl-72 pt-44 w-full overlay">
          <h1 className=" text-6xl py-4 pb-6 font-main-head">
            About Us
          </h1>
          <div className="h-1 bg-default w-4/5 "></div>
        </div>
      </div>
      <AboutusContent/>
    </div>
  )
}

export default AboutUs
