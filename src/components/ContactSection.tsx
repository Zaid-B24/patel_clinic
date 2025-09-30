const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us & Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Details */}
          <div className="bg-gray-700 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Clinic Information</h3>
            <div className="space-y-4">
              <p><strong>OPD Timings:</strong> 11 AM - 2 PM & 6 PM - 9 PM (Sunday Closed)</p>
              <p><strong>Lab Timings:</strong> 7 AM - 11 PM (Daily)</p>
              <p><strong>Appointments:</strong> <a href="tel:9028430911" className="text-blue-400 hover:underline">9028 430 911</a></p>
              <p><strong>Pathology Lab:</strong> <a href="tel:7588723911" className="text-blue-400 hover:underline">7588 723 911</a></p>
              <p>
                <strong>Address:</strong> Plot No. 4, Next to Patel TVS Showroom, Opp. Bharat Petrol Pump, Priyadarshini Colony, Ch. Sambhajinagar (Aurangabad) - 431002.
              </p>
            </div>
          </div>
          {/* Google Map Embed */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.54010582846!2d75.34293881534407!3d19.859664531835363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba28b9a528e23%3A0x63a3c267c130386c!2sBharat%20Petroleum!5e0!3m2!1sen!2sin!4v1672842109876!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-xl"
            ></iframe>
            {/* Note: Update the iframe src with the actual clinic's Google Maps embed code */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;