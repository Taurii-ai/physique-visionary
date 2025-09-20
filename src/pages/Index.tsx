import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import PrivacyPolicy from "@/components/PrivacyPolicy";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <PrivacyPolicy />
    </div>
  );
};

export default Index;
