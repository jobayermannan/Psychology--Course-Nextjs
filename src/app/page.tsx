import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Instructor } from "@/components/Instructors";
import PsychologicalTestimonials from "@/components/PsychologicalTestimonials";
import UpComingWebinars from "@/components/UpComingWebiners";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Page() {
  return(
       <main className="min-h-screen bg-black/[0.96] bg-grid-white/[0.02] antialiased"> 
       
        <HeroSection>
          
        </HeroSection>
         <FeaturedSection/>
         <WhyChooseUs/>
         <PsychologicalTestimonials/>
         <UpComingWebinars/>
         <Instructor></Instructor>
         <Footer></Footer>
        </main>
  );
}