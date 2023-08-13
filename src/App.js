import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Hero from "./sections/Hero";
import OurGoals from "./sections/OurGoals";
import Services from "./sections/Services";
import MeetOurDentistSection from "./sections/MeetOurDentistSection";
import WorkingHoursSection from "./sections/WorkingHoursSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import TestimonialSection from "./sections/TestimonialSection ";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <OurGoals/>
        <Services />
        <MeetOurDentistSection />
        <WorkingHoursSection />
        <TestimonialSection />
        <ContactSection />
        <Footer />
    </div>
  );
}

export default App;
