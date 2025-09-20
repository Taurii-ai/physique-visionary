import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container px-4 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent">AI-Powered Analysis</span>
            </div>
            
            {/* Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Transform Your
                <span className="block text-accent">Physique</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Get objective, data-driven insights about your physique progress. 
                Upload a photo and receive detailed AI analysis.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="xl" className="group">
                Start Free Analysis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Physique AI app interface showing AI-powered body analysis" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;