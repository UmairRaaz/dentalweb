import React from 'react';
import dentistOne from '../images/dentistOne.jpg'
import dentistTwo from '../images/DentistTwo.jpg'
import dentistThree from '../images/Dentist3.jpg'
const MeetOurDentistSection = () => {
    const dentistsData = [
        {
          name: 'Dr. Hassan Malik',
          specialty: 'General Dentistry',
          imageUrl: dentistOne,
        },
        {
          name: 'Dr. Ahmed Khan',
          specialty: 'Cosmetic Dentistry',
          imageUrl: dentistTwo,
        },
        {
          name: 'Dr. Muhammad Ali',
          specialty: 'Cosmetic Dentistry',
          imageUrl: dentistThree,
        },
      ];

  return (
    <section className="bg-gray-200 py-12" id='aboutSection'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Dentists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dentistsData.map((dentist, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
              <img
                className="w-full h-72 object-cover mb-4 rounded-lg"
                src={dentist.imageUrl}
                alt={dentist.name}
              />
              <h3 className="text-lg font-bold mb-2">{dentist.name}</h3>
              <p className="text-gray-600 mb-2">{dentist.specialty}</p>
              {/* Add more details about the dentists if needed */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurDentistSection;
