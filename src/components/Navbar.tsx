// import ThemeToggler from "./ThemeToggler";

import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
      <Image src="/logo.png" width={40} height={40} alt="Dr. Patel Hospital Logo" />
      <div className="text-2xl font-bold text-blue-600">
        Dr. Patel Hospital
      </div>
    </div>
        {/* <ThemeToggler /> */}
        <div className="hidden md:flex space-x-6">
          <a href="#doctors" className="text-gray-600 hover:text-blue-500">Our Doctors</a>
          <a href="#services" className="text-gray-600 hover:text-blue-500">Services</a>
          <a href="#lab" className="text-gray-600 hover:text-blue-500">Pathology Lab</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a>
        </div>
        <a href="#contact" className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Book Appointment
        </a>
      </nav>
    </header>
  );
};

export default Navbar;