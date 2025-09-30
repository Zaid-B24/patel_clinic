const LabSection = () => {
  return (
    <section id="lab" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Dr. Patel Pathology Lab</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Accurate diagnostics with state-of-the-art equipment, led by expert pathologist Dr. Nidra Patel.
        </p>
        <div className="bg-gray-50 rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="border-b md:border-b-0 md:border-r pb-4 md:pb-0 border-gray-200">
            <h4 className="text-lg font-bold text-blue-600 mb-2">Modern Equipment</h4>
            <p className="text-sm text-gray-600">Ensuring precise and reliable results.</p>
          </div>
          <div className="border-b md:border-b-0 md:border-r pb-4 md:pb-0 border-gray-200">
            <h4 className="text-lg font-bold text-blue-600 mb-2">Expert Diagnosis</h4>
            <p className="text-sm text-gray-600">All tests are supervised by an MD Pathologist.</p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg">
            <h4 className="text-lg font-bold text-green-800 mb-2">Free Home Sample Collection</h4>
            <p className="text-sm text-green-700">Convenience and care, delivered to your doorstep.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabSection;