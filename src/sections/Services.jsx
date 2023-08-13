import React from 'react'

const Services = () => {
    const servicesData = [
        {
          title: 'Teeth Cleaning',
          description: 'Regular teeth cleaning and maintenance for optimal oral hygiene.',
          icon: '🦷',
        },
        {
          title: 'Dental Checkup',
          description: 'Comprehensive dental checkups and examinations for preventive care.',
          icon: '👨‍⚕️',
        },
        {
          title: 'Teeth Whitening',
          description: 'Safe and effective teeth whitening procedures for a brighter smile.',
          icon: '🔍',
        },
        // Add more services here
      ];
      return (
        <section className="bg-gray-100 py-12" id='servicesSection'>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {servicesData.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center justify-center">
                  <span className="text-2xl mb-4">{service.icon}</span>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  );
}

export default Services