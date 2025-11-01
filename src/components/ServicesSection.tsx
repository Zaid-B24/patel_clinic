// 'use client';

// import { CheckCircle2, Stethoscope, Activity, Microscope, Wind, Moon, Pill, AlertCircle } from 'lucide-react';
// import { useState } from 'react';

// const conditionsTreated = [
//   { name: "Asthma & Pediatric Asthma", icon: Wind },
//   { name: "Tuberculosis (TB)", icon: Activity },
//   { name: "COPD", icon: Stethoscope },
//   { name: "Chronic Cough & Cold", icon: AlertCircle },
//   { name: "Allergies & Sinusitis", icon: Microscope },
//   { name: "Snoring Problems", icon: Moon },
// ];

// const facilities = [
//   { name: "24/7 Emergency Services", icon: AlertCircle },
//   { name: "Pulmonary Function Test (PFT)", icon: Activity },
//   { name: "ECG & X-Ray", icon: Microscope },
//   { name: "Allergy Skin Prick Test", icon: Stethoscope },
//   { name: "Sleep Study", icon: Moon },
//   { name: "In-house Pharmacy", icon: Pill },
//   { name: "Semi-ICU", icon: Activity },
// ];

// const ServicesSection = () => {
//   const [hoveredCondition, setHoveredCondition] = useState<string | null>(null);
//   const [hoveredFacility, setHoveredFacility] = useState<string | null>(null);

//   return (
//     <section id="services" className="relative pt-5 scroll-mt-24 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white"></div>

//       <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl translate-y-1/2"></div>

//       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
          

//           <h2 className="text-5xl lg:text-6xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
//               Our Services & Facilities
//             </span>
//           </h2>

//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Advanced medical expertise combined with cutting-edge technology to provide exceptional care for all your healthcare needs
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           <div className="space-y-6">
//             <div className="flex items-center space-x-3 mb-8">
//               <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
//                 <Stethoscope className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="text-3xl font-bold text-gray-900">Conditions We Treat</h3>
//             </div>

//             <div className="space-y-3">
//               {conditionsTreated.map((condition) => {
//                 const Icon = condition.icon;
//                 return (
//                   <div
//                     key={condition.name}
//                     onMouseEnter={() => setHoveredCondition(condition.name)}
//                     onMouseLeave={() => setHoveredCondition(null)}
//                     className="group relative p-4 rounded-xl bg-white border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-default overflow-hidden"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

//                     <div className="relative flex items-center space-x-4">
//                       <div className="flex-shrink-0">
//                         <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 group-hover:from-blue-200 group-hover:to-blue-100 transition-all duration-300">
//                           <Icon className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
//                         </div>
//                       </div>

//                       <div className="flex-grow">
//                         <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
//                           {condition.name}
//                         </p>
//                       </div>

//                       <div className="flex-shrink-0">
//                         <CheckCircle2 className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="space-y-6">
//             <div className="flex items-center space-x-3 mb-8">
//               <div className="p-2.5 rounded-lg bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
//                 <Activity className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="text-3xl font-bold text-gray-900">Hospital Facilities</h3>
//             </div>

//             <div className="space-y-3">
//               {facilities.map((facility) => {
//                 const Icon = facility.icon;
//                 return (
//                   <div
//                     key={facility.name}
//                     onMouseEnter={() => setHoveredFacility(facility.name)}
//                     onMouseLeave={() => setHoveredFacility(null)}
//                     className="group relative p-4 rounded-xl bg-white border border-gray-100 hover:border-green-300 hover:shadow-lg transition-all duration-300 cursor-default overflow-hidden"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-600/5 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

//                     <div className="relative flex items-center space-x-4">
//                       <div className="flex-shrink-0">
//                         <div className="p-2.5 rounded-lg bg-gradient-to-br from-green-100 to-green-50 group-hover:from-green-200 group-hover:to-green-100 transition-all duration-300">
//                           <Icon className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
//                         </div>
//                       </div>

//                       <div className="flex-grow">
//                         <p className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
//                           {facility.name}
//                         </p>
//                       </div>

//                       <div className="flex-shrink-0">
//                         <CheckCircle2 className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

        
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;





'use client';

import { 
  CheckCircle2, Stethoscope, Activity, Microscope, Wind, Moon, Pill, AlertCircle, 
  Shield,
  LucideIcon
} from 'lucide-react';

const conditionsTreated = [
  { name: "Asthma & Pediatric Asthma", icon: Wind },
  { name: "Tuberculosis (TB)", icon: Activity },
  { name: "COPD", icon: Stethoscope },
  { name: "Chronic Cough & Cold", icon: AlertCircle },
  { name: "Allergic Immunotherapy", icon: Shield },
  { name: "Sleep Disorder", icon: Moon },
  { name: "Cancer Screening", icon: Microscope },
];

const facilities = [
  { name: "24/7 Emergency Services", icon: AlertCircle },
  { name: "Pulmonary Function Test (PFT)", icon: Activity },
  { name: "ECG & X-Ray", icon: Microscope },
  { name: "Allergy Skin Prick Test", icon: Stethoscope },
  { name: "Sleep Study", icon: Moon },
  { name: "In-house Pharmacy", icon: Pill },
  { name: "Semi-ICU", icon: Activity },
];

type ServiceItem = {
  name: string;
  icon: LucideIcon;
};

type ServiceColumnProps = {
  title: string;
  TitleIcon: LucideIcon;
  items: ServiceItem[];
  theme: 'blue' | 'green';
};

const ServiceColumn = ({ title, TitleIcon, items, theme }: ServiceColumnProps) => {
  const themeClasses = {
    blue: {
      titleBg: "bg-gradient-to-br from-blue-500 to-blue-600",
      itemBorder: "hover:border-blue-300",
      itemHoverBg: "bg-gradient-to-r from-blue-500/5 to-blue-600/5",
      iconBg: "bg-gradient-to-br from-blue-100 to-blue-50 group-hover:from-blue-200 group-hover:to-blue-100",
      iconColor: "text-blue-600 group-hover:text-blue-700",
      textColor: "group-hover:text-blue-600",
      checkColor: "text-blue-500",
    },
    green: {
      titleBg: "bg-gradient-to-br from-green-500 to-green-600",
      itemBorder: "hover:border-green-300",
      itemHoverBg: "bg-gradient-to-r from-green-500/5 to-green-600/5",
      iconBg: "bg-gradient-to-br from-green-100 to-green-50 group-hover:from-green-200 group-hover:to-green-100",
      iconColor: "text-green-600 group-hover:text-green-700",
      textColor: "group-hover:text-green-600",
      checkColor: "text-green-500",
    }
  };

  const currentTheme = themeClasses[theme];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-8">
        <div className={`p-2.5 rounded-lg ${currentTheme.titleBg} shadow-lg`}>
          <TitleIcon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className={`group relative p-3 rounded-xl bg-white border border-gray-100 ${currentTheme.itemBorder} hover:shadow-lg transition-all duration-300 cursor-default overflow-hidden`}
            >
              <div className={`absolute inset-0 ${currentTheme.itemHoverBg} translate-x-full group-hover:translate-x-0 transition-transform duration-300`}></div>

              <div className="relative flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className={`p-2.5 rounded-lg ${currentTheme.iconBg} transition-all duration-300`}>
                    <Icon className={`w-5 h-5 ${currentTheme.iconColor} transition-colors duration-300`} />
                  </div>
                </div>

                <div className="flex-grow">
                  <p className={`font-semibold text-gray-900 ${currentTheme.textColor} transition-colors duration-300`}>
                    {item.name}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <CheckCircle2 className={`w-5 h-5 ${currentTheme.checkColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


const ServicesSection = () => {
  return (
    <section 
      id="services"className="relative pt-16 scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
              Our Services & Facilities
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced medical expertise combined with cutting-edge technology to provide exceptional care for all your healthcare needs
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          
          <ServiceColumn 
            title="Conditions We Treat"
            TitleIcon={Stethoscope}
            items={conditionsTreated}
            theme="blue"
          />
          
          <ServiceColumn 
            title="Hospital Facilities"
            TitleIcon={Activity}
            items={facilities}
            theme="green"
          />
          
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;