// app/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Compassionate Care for a Healthier Community
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Specializing in Respiratory Health, Allergies, and General Medicine.
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;