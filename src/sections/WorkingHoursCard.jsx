import React from 'react';

const WorkingHoursCard = ({ day, hours }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md flex justify-between items-center mt-2">
      <h3 className="text-lg font-bold mb-2">{day}</h3>
      <p className="text-gray-600">{hours}</p>
    </div>
  );
};

export default WorkingHoursCard;
