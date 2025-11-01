'use client';

import { ArrowRight, Heart, Shield, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, label: '10,000+', description: 'Patients Treated' },
    { icon: Heart, label: '7+', description: 'Years of Service' },
    { icon: Shield, label: '100%', description: 'Care Excellence' },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-24 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
                   Care that 
                </span>
                <span className="block text-gray-800">goes beyond medicine</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Specializing in Respiratory Health, Allergies, and General Medicine with state-of-the-art facilities and a dedicated team of healthcare professionals committed to your well-being.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="group relative px-8 py-4 rounded-full font-semibold text-base text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden flex items-center justify-center"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300">
                  <span>Get In Touch</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300" />
                </span>
              </a>

              <a
                href="#services"
                className="group px-8 py-4 rounded-full font-semibold text-base text-blue-600 bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Explore Services</span>
                </span>
              </a>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by leading healthcare organizations</p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white shadow-md flex items-center justify-center text-white font-bold text-sm"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">1,500+ Happy Patients</p>
                  <p className="text-gray-500">This month alone</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <div className="grid grid-cols-1 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={index}
                        className="group/stat p-6 rounded-xl bg-gradient-to-br from-blue-50/50 to-transparent border border-blue-100/50 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-default"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg group-hover/stat:shadow-blue-500/50 transition-all duration-300">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                              {stat.label}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">{stat.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <p className="text-sm font-semibold mb-2">Emergency Support Available</p>
                  <p className="text-2xl font-bold">24/7 Healthcare</p>
                  <p className="text-blue-100 text-sm mt-2">Round-the-clock medical assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
