import React from 'react';
import { UserRound } from 'lucide-react';


const doctors = [
  {
    name: 'Dr. Zabee I. Patel',
    specialty: 'Consultant Physician',
    qualifications: 'MBBS, TDD (Mumbai)',
    image: '/images/Mejpg.jpg',
    bio: 'Dr. Patel is a leading expert in respiratory medicine with over 20 years of dedicated experience.' 
  },
  {
    name: 'Dr. Sana Patel',
    specialty: 'Anaesthetist',
    qualifications: 'MBBS, MD',
    image: '/images/Mejpg.jpg',
    bio: 'Specializing in patient comfort and safety, Dr. Sana provides expert anaesthetic care for all procedures.'
  },
  {
    name: 'Dr. Nida Patel',
    specialty: 'Pathology & Hepatopathology',
    qualifications: 'MBBS, MD, Fellow in Hepatopathology',
    image: '/images/Mejpg.jpg',
    bio: 'Dr. Nida brings world-class diagnostic accuracy to our in-house lab, specializing in complex cases.'
  },
];
const DoctorsSection = () => {
  return (
    <section id="doctors" className="scroll-mt-24 pt-12 pb-10 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Expert Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doctor) => (
  <div 
    key={doctor.name} 
    className="bg-white rounded-xl shadow-lg p-6 flex flex-col text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100"
  >
    
    {/* 1. Bigger Image */}
    {/* <div className="relative w-40 h-40 mx-auto mb-5">
      <Image
        src={doctor.image}
        alt={doctor.name}
        layout="fill"
        objectFit="cover"
        className="rounded-full shadow-md"
      />
    </div> */}
    <div className="relative w-40 h-40 mx-auto mb-5 flex items-center justify-center">
  <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center shadow-md">
    <UserRound className="w-24 h-24 text-gray-400" />
  </div>
</div>
    
    <div className="flex-grow">
      <h3 className="text-xl font-bold text-blue-600">{doctor.name}</h3>
      <p className="text-gray-700 font-medium text-sm">{doctor.specialty}</p>
      <p className="text-gray-500 text-sm mb-4">{doctor.qualifications}</p>
      <p className="text-gray-600 text-sm mt-4 text-center">
        {doctor.bio} 
      </p>
    </div>
  </div>
))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;