import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-gray-400">
            Providing top-notch dental care with a compassionate touch, we are committed to enhancing smiles and promoting oral health for all our patients.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-gray-400">Email: info@example.com</p>
            <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
            <p className="text-gray-400">Address: 123 Main Street, City, Country</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Social Media</h4>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              {/* Add more social media links as needed */}
            </ul>
          </div>
        </div>
        <hr className="my-8 border-t border-gray-700" />
        <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} Your Company</p>
      </div>
    </footer>
  );
};

export default Footer;
