import React from 'react'
import OurGoalImage from '../images/ourGoalImage.png'
const OurGoals = () => {
  return (
    <section className="flex flex-wrap md:px-20 px-5 md:mb-0 mb-16">
      {/* Left side: Image */}
      <div className="w-full md:w-1/2 mt-10">
        <img
          className="w-[500px] md:h-full object-cover "
          src={OurGoalImage}
          alt="Left Side "
        />
      </div>

      {/* Right side: Text */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <div className="max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">First Impressions Begin with a <span className="text-[#83a2f7]">Smile</span> </h2>
          <p className="text-gray-600 text-xl text-justify">
          At our healthcare center, our mission is to deliver compassionate and personalized medical services while offering the most comprehensive range of general, cosmetic, and specialized treatments. With medical facilities spanning across various regions, our clinic is dedicated to expanding our reach with a singular vision - to make accessible, top-tier healthcare available to everyone, without compromising on quality.
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurGoals