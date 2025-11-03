import { Microscope, Award, Home } from 'lucide-react';
import Image from 'next/image';

const LabSection = () => {
  return (
    <section id="lab" className="pt-20 pb-5 scroll-mt-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Image src={'/patho.jpg'} height={100} width={100} alt='Dr. Patel Pathology Lab Logo'/>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dr. Patel Pathology Lab
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
  Accurate diagnostics with state-of-the-art equipment, led by expert pathologist <span className="whitespace-nowrap font-semibold">Dr. Nida Patel.</span>
</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200">
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Microscope className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Modern Equipment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ensuring precise and reliable results with cutting-edge technology.
              </p>
            </div>
          </div>

          <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200">
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Expert Diagnosis
              </h4>
              <p className="text-gray-600 leading-relaxed">
                All tests are supervised by an MD Pathologist with years of experience.
              </p>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-emerald-400 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
            <div className="relative flex flex-col items-center text-center h-full">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Home className="w-7 h-7 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Free Home Sample Collection
              </h4>
              <p className="text-emerald-50 leading-relaxed">
                Convenience and care, delivered to your doorstep with professional service.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-3xl mx-auto">
            Our laboratory is equipped with the latest diagnostic technology and maintains the highest standards of quality control to ensure accurate and timely results for all your pathology needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LabSection;
