import React from 'react';
import WorkingHoursCard from './WorkingHoursCard';
import WorkingImage from '../images/working.jpg'
const WorkingHoursSection = () => {
  const workingHoursData = [
    { day: 'MONDAY', hours: '08:00 am - 05:00 pm' },
    { day: 'TUESDAY', hours: '08:00 pm - 05:00 pm' },
    { day: 'WEDNESDAY', hours: '08:00 pm - 05:00 pm' },
    { day: 'THURSDAY', hours: '08:00 pm - 05:00 pm' },
    { day: 'FRIDAY', hours: '08:00 pm - 05:00 pm' },
    { day: 'SATURDAY', hours: '08:00 pm - 05:00 pm' },
    { day: 'SUNDAY', hours: 'Closed' },
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 flex flex-wrap items-center">
        {/* Left side: Image */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 ">
          <img
            className="md:w-[400px] w-[250px] ml-14 md:h-full object-cover rounded-lg shadow-md md:ml-28"
            src={WorkingImage}
            alt="Left Side "
          />
        </div>

        {/* Right side: Working Hours */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4 ml-20 md:ml-36">Working Hours</h2>
          {workingHoursData.map((item, index) => (
            <WorkingHoursCard key={index} day={item.day} hours={item.hours} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingHoursSection;
