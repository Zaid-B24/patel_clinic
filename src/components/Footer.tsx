// app/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    // 1. CHANGED: Theme to bg-gray-100 and text-gray-700
    // 2. CHANGED: Spacing to pt-20 (for the gap) and pb-12 (for the bottom)
    <footer className="bg-gray-100 text-gray-700 pt-20 pb-12">
      <div className="container mx-auto px-6 text-center">
        
        {/* 3. CHANGED: Made text slightly bolder */}
        <p className="font-medium">
          &copy; {new Date().getFullYear()} Dr. Patel Hospital. All Rights Reserved.
        </p>
        
        {/* 4. CHANGED: Text color from gray-400 to gray-500 */}
        <p className="text-sm text-gray-500 mt-2">
          Designed with care.
        </p>
      </div>
    </footer>
  );
};

export default Footer;