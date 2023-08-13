import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-8" id='contactSection'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Email Us */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold mb-2">Email Us</h3>
            <p className="text-gray-600">
              If you have any questions or inquiries, please feel free to email us at{' '}
              <a href="mailto:info@example.com" className="text-blue-500 hover:underline">
                info@example.com
              </a>
              .
            </p>
          </div>

          {/* Call Us */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold mb-2">Call Us</h3>
            <p className="text-gray-600">Call us at: +1 (123) 456-7890</p>
          </div>

          {/* Address */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold mb-2">Address</h3>
            <address className="text-gray-600">
              123 Main Street
              <br />
              City, State ZIP Code
              <br />
              Country
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
