import ContactSection from "@/components/ContactSection";
import DoctorsSection from "@/components/DoctorsSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import LabSection from "@/components/LabSection";
import Navbar from "@/components/Navbar";
import ReviewsSection from "@/components/ReviewsSection";
import ServicesSection from "@/components/ServicesSection";


export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800">
    <Navbar />
    <HeroSection />
    <DoctorsSection />
    <ServicesSection />
    <LabSection />
    <GallerySection />
    <ReviewsSection />
    <ContactSection />
    <Footer />
    </main>
  );
}
