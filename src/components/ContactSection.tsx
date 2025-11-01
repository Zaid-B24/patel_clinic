import { Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    // 1. CHANGED: Light background, spacing fixes
    <section 
  id="contact" 
  className="pt-20 scroll-mt-8 bg-blue-50 text-gray-800" 
>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          
          {/* 2. CHANGED: Icon theme to match other light sections */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <MapPin className="w-8 h-8 text-blue-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us & Location
          </h2>
          
          {/* 3. CHANGED: Text color from gray-300 to gray-600 */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit us at our conveniently located clinic and pathology lab
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* 4. CHANGED: Dark card to light card */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-500 rounded"></div>
              Clinic Information
            </h3>

            {/* 5. CHANGED: All text and icon colors from light-on-dark to dark-on-light */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">OPD Timings</p>
                  <p className="text-gray-800 font-medium">11 AM - 2 PM & 6 PM - 9 PM</p>
                  <p className="text-sm text-gray-500">(Sunday Closed)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-emerald-100">
                    <Clock className="h-5 w-5 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Lab Timings</p>
                  <p className="text-gray-800 font-medium">7 AM - 11 PM (Daily)</p>
                </div>
              </div>

              {/* 6. CHANGED: Divider color */}
              <div className="h-px bg-gradient-to-r from-gray-200 to-transparent"></div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Clinic Appointments</p>
                  <a
                    href="tel:9028430911"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">9028 430 911</span>
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-100">
                    <Phone className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Pathology Lab</p>
                  <a
                    href="tel:7588723911"
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium transition-colors group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">7588 723 911</span>
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
  <div className="flex-shrink-0">
    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-red-100">
      <Phone className="h-5 w-5 text-red-600" />
    </div>
  </div>
  <div>
    <p className="text-sm text-gray-500 mb-2">Emergency Contact</p>
    <a
      href="tel:1234567890"
      className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 font-medium transition-colors group"
    >
      <span className="group-hover:translate-x-1 transition-transform">
        1234 567 890
      </span>
    </a>
  </div>
</div>

              <div className="h-px bg-gradient-to-r from-gray-200 to-transparent"></div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-amber-100">
                    <MapPin className="h-5 w-5 text-amber-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Address</p>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Plot No. 4, Next to Patel TVS Showroom, Opp. Bharat Petrol Pump, Priyadarshini Colony, Ch. Sambhajinagar (Aurangabad) - 431002
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 7. CHANGED: Border color to match light theme */}
          <div className="rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-200 transition-colors duration-300 h-full min-h-96">
            <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.966792332791!2d75.28769817504893!3d19.883624081494464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb99cbbfbbdad5%3A0x9316a293b625df73!2sDr%20Patel%20Hospital%20%26%20Pathology%20Lab!5e0!3m2!1sen!2sin!4v1761944777015!5m2!1sen!2sin"              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;