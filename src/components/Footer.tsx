// app/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Dr. Patel Hospital. All Rights Reserved.</p>
        <p className="text-sm text-gray-400 mt-2">
          Designed with care.
        </p>
      </div>
    </footer>
  );
};

export default Footer;