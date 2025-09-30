import ContactSection from "@/components/ContactSection";
import DoctorsSection from "@/components/DoctorsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LabSection from "@/components/LabSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";


export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800">
    <Navbar />
    <HeroSection />
    <DoctorsSection />
    <ServicesSection />
    <LabSection />
    <ContactSection />
    <Footer />
    </main>
  );
}
