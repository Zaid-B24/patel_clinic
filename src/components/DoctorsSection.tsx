// app/components/DoctorsSection.js
import React from 'react';
import Image from 'next/image'; // For optimized images


const doctors = [
  {
    name: 'Dr. Zabee I. Patel',
    specialty: 'Consultant Physician',
    qualifications: 'MBBS, TDD (Mumbai)',
    image: '/images/Mejpg.jpg', 
  },
  {
    name: 'Dr. Sana Patel',
    specialty: 'Anaesthetist',
    qualifications: 'MBBS, MD',
    image: '/images/Mejpg.jpg', // Replace with actual image path
  },
  {
    name: 'Dr. Nida Patel',
    specialty: 'Pathology & Hepatopathology',
    qualifications: 'MBBS, MD, Fellow in Hepatopathology',
    image: '/images/Mejpg.jpg', // Replace with actual image path
  },
];

const DoctorsSection = () => {
  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Expert Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doctor) => (
            <div key={doctor.name} className="bg-gray-50 rounded-lg shadow-lg p-6 text-center transform hover:-translate-y-2 transition duration-300">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-600">{doctor.name}</h3>
              <p className="text-gray-700 font-medium">{doctor.specialty}</p>
              <p className="text-gray-500 text-sm">{doctor.qualifications}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;