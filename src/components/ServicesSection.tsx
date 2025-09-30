// app/components/ServicesSection.js
import React from 'react';

const conditionsTreated = ["Asthma & Pediatric Asthma", "Tuberculosis (TB)", "COPD", "Chronic Cough & Cold", "Allergies & Sinusitis", "Snoring Problems"];
const facilities = ["24/7 Emergency Services", "Pulmonary Function Test (PFT)", "ECG & X-Ray", "Allergy Skin Prick Test", "Sleep Study", "In-house Pharmacy", "Semi-ICU"];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services & Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Conditions We Treat</h3>
            <ul className="space-y-3">
              {conditionsTreated.map(condition => (
                <li key={condition} className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>{condition}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Hospital Facilities</h3>
            <ul className="space-y-3">
              {facilities.map(facility => (
                <li key={facility} className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>{facility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;