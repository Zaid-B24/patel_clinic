'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#doctors", label: "Our Doctors" },
    { href: "#services", label: "Services" },
    { href: "#lab", label: "Pathology Lab" },
    {href:"#reviews", label:"Reviews"},
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3'
          : 'bg-white/80 backdrop-blur-md shadow-sm py-4'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/30 transition-all duration-300"></div>
              
                  <Image src="/Heart.jpg" width={40} height={40} alt="Dr. Patel Hospital Logo" />
              
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Dr. Patel Hospital
              </div>
              <div className="text-xs text-gray-500 font-medium -mt-1">
                Excellence in Healthcare
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-300 group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+91 8806911911"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
            >
              <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                <Phone className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium">Emergency</span>
            </a>
            <a
              href="#contact"
              className="relative px-6 py-2.5 rounded-full font-medium text-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-1 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium text-sm transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+91 8806911911"
                className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 font-medium text-sm transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Emergency Call</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 font-medium text-sm shadow-lg transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
