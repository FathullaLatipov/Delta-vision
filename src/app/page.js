import { HeadSection } from "@/components/HeadSection";
import { Navbar } from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import QuizBlock from "@/components/QuizBlock";
import ServicesSection from "@/components/ServicesSection";
import FAQ from "@/components/FAQ";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import AuditFormBlock from "@/components/Forma5";
import CompanyLogos from "@/components/OurClients";
import QuizModal from "@/components/modals/QuizModal";
import Commer from "@/components/Commer";

export default function HomePage() {
    return (
       <>
           <Navbar />
           <div className="relative text-white min-h-screen bg-fixed overflow-hidden">
               {/* Animated background gradient */}
               <div className="fixed inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0f0f1e] pointer-events-none"></div>
               <div className="fixed inset-0 bg-gradient-radial opacity-30 pointer-events-none"></div>

               <div className="relative z-10">
                   <HeadSection />
                   <AboutUs />
                   <QuizBlock />
                   <ServicesSection />
                   <AuditFormBlock />
                   <FAQ />
                   <TestimonialsSection />
                   <CompanyLogos />
                   <Commer />
                   <Footer />
               </div>
           </div>
           <QuizModal />
       </>
    )
}
