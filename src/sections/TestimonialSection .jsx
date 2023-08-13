import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TestimonialSection = () => {
  return (
    <section className="bg-[#e3edfd] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="p-8 md:ml-10">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-4">
            What Our Happy Customers Say
          </h2>
          <p className="text-gray-600 leading-relaxed md:text-3xl">
            If you are in need of high-quality, professional and friendly dental
            care, look no further than our clinic.
          </p>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 mt-8"
          >
            Book Now
          </button>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Review */}
          <div className="bg-white rounded-tl-3xl rounded-br-3xl mb-4 relative p-6">
            <div className="flex items-center md:mt-12 mt-5">
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
            </div>
            <p className="text-black font-medium text-lg md:mt-10 mt-5 ">
              "The dental team is top-notch. They made me feel comfortable
              throughout the whole procedure. Will definitely come back!"
            </p>

            <p className="text-gray-600 font-bold mt-4 md:mt-8">John Doe</p>
          </div>

          {/* Second Review */}
          <div className="bg-white rounded-tr-3xl rounded-bl-3xl relative p-6">
            <div className="flex items-center md:mt-12 mt-5">
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
            </div>
            <p className="text-black font-medium text-lg mt-5  md:mt-10">
              "The staff was professional and courteous. The clinic is clean and
              well-maintained. I had a positive experience overall."
            </p>

            <p className="text-gray-600 font-bold mt-4 md:mt-8">Jane Smith</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
