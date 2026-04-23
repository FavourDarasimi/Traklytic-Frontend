import React from "react";
import ModernNavbar from "../components/Landing Page/ModernNavbar";
import HeroSection from "../components/Landing Page/HeroSection";
import LandingPageSocialProof from "../components/Landing Page/LandingPageSocialProof";
import LandingPageFeatures from "../components/Landing Page/LandingPageFeatures";
import WhyChooseUsSection from "../components/Landing Page/WhyChooseUsSection";
import TestimonialsSection from "../components/Landing Page/TestimonialsSection";
import CTASection from "../components/Landing Page/CTASection";
import Footer from "../components/Landing Page/Footer";

// Main Landing Page Component
export default function LandingPage() {
  return (
    <div className="bg-white">
      <ModernNavbar />
      <HeroSection />
      <LandingPageSocialProof />
      <LandingPageFeatures />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
