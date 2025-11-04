import Image from 'next/image';

// --- 1. Add your image filenames here ---
// (Make sure these images are in your /public/gallery/ folder)
const images = [
  'image-1.jpg',
  'image-2.jpg',
//   'image-3.jpg',
//   'image-4.jpg',
//   'image-5.jpg',
//   'image-6.jpg',
];

const GallerySection = () => {
  return (
    // --- 2. This is the main section container ---
    <section id="gallery" className="pt-20 scroll-mt-24 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- 3. SEO Heading --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Clinic & Facilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into our state-of-the-art facility and patient care areas.
          </p>
        </div>

        {/* --- 4. Responsive Image Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src) => (
            <div 
              key={src} 
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg group"
            >
              <Image
                src={`/gallery/${src}`}
                alt="Dr. Patel Hospital Gallery"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;